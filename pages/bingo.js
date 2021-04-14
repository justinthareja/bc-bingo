import * as React from "react";
import confetti from "canvas-confetti";
import { useSocket } from "../hooks/useSocket";
import { Layout } from "../components/Layout";
import { BingoGame } from "../components/BingoGame";
import { WinCard } from "../components/WinCard";

export default function Bingo() {
  const [winner, setWinner] = React.useState(null);
  const [congrats, setCongrats] = React.useState([]);
  const socket = useSocket();

  useSocket("win", (winner) => {
    setWinner(socket.id === winner.userID ? "You" : winner);
    confetti({ spread: 90, particleCount: 100, origin: { y: 1 } });
  });

  useSocket("congrats", (data) => {
    setCongrats([...congrats, data]);
  });

  return (
    <Layout>
      {winner ? (
        <WinCard socket={socket} winner={winner} congrats={congrats} />
      ) : (
        <BingoGame socket={socket} />
      )}
    </Layout>
  );
}
