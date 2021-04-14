import * as React from "react";
import confetti from "canvas-confetti";
import { useSocket } from "../hooks/useSocket";
import { Layout } from "../components/Layout";
import { BingoGame } from "../components/BingoGame";
import { WinCard } from "../components/WinCard";

export default function Bingo() {
  const [winner, setWinner] = React.useState(null);
  const socket = useSocket();

  useSocket("win", ({ userID, username }) => {
    setWinner(socket.id === userID ? "You" : username);
    confetti({ spread: 90, particleCount: 100, origin: { y: 1 } });
  });

  return (
    <Layout>
      {winner ? <WinCard winner={winner} /> : <BingoGame socket={socket} />}
    </Layout>
  );
}
