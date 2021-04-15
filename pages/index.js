import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSocket } from "../hooks/useSocket";
import { Layout, siteTitle } from "../components/Layout";
import styles from "./index.module.css";

export default function Home() {
  const [username, setUsername] = React.useState("");
  const [hasUsername, setHasUsername] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  const socket = useSocket("connect_error", (err) => {
    if (err.message === "invalid username") {
      // let user know
      setHasUsername(false);
    }
  });
  const router = useRouter();

  useSocket("users", (users) => {
    users.forEach((user) => {
      user.self = user.userID === socket.id;
    });

    // put the current user first, and then sort by username
    setUsers(
      users.sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      })
    );
  });

  useSocket("user connected", (user) => {
    setUsers([...users, user]);
  });

  useSocket("connect", () => {
    router.push("/bingo");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasUsername(true);
    socket.auth = { username };
    socket.connect();
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.section}>
        <h1>
          <span>Boston Commons</span>
        </h1>
        {!hasUsername && (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter a username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </form>
        )}
      </section>
    </Layout>
  );
}
