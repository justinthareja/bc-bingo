import * as React from "react";
import io from "socket.io-client";

const socket = io(undefined, { autoConnect: false });

if (process.env.NODE_ENV !== "production") {
  socket.onAny((event, ...args) => {
    console.log(event, args);
  });
}

export function useSocket(eventName, cb) {
  React.useEffect(() => {
    socket.on(eventName, cb);

    return function useSocketCleanup() {
      socket.off(eventName, cb);
    };
  }, [eventName, cb]);

  return socket;
}
