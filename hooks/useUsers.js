import * as React from "react";
import { useSocket } from "./useSocket";

export function useUsers() {
  const socket = useSocket();
  const [users, setUsers] = React.useState([]);

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

  return users;
}
