import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSocket } from "../hooks/useSocket";
import { Layout, siteTitle } from "../components/Layout";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.auth = { username };
    socket.connect();
    router.push("/bingo");
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Boston Commons Bingo</h1>
        {!hasUsername && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username
              <input
                type="text"
                name="username"
                id="username"
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
