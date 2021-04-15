import * as React from "react";
import { useRouter } from "next/router";
import { useSocket } from "../hooks/useSocket";
import { Input } from "../components/Input";

export default function Home() {
  const [username, setUsername] = React.useState("");
  const [isConnected, setIsConnected] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState(null);

  const router = useRouter();
  const socket = useSocket("connect_error", (err) => {
    setIsError(true);
    setError(err);
  });

  useSocket("connect", () => {
    setIsConnected(true);
    setIsLoading(false);
  });

  React.useLayoutEffect(() => {
    if (isConnected) {
      router.push("/bingo");
    }
  }, [isConnected, router]);

  React.useEffect(() => {
    socket.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e) => {
    if (!username) {
      return;
    }

    setIsLoading(true);
    e.preventDefault();
    socket.auth = { username };
    socket.connect();
  };

  if (isError) {
    console.log(error);
  }

  return (
    <Input
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      onBlur={handleSubmit}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
}
