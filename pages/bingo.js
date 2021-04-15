import * as React from "react";
import confetti from "canvas-confetti";
import { useSocket } from "../hooks/useSocket";
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

  useSocket("congrats", (content) => {
    setCongrats([
      ...congrats,
      {
        ...content,
        left: `${random(75)}%`,
        r: random(225),
        g: random(225),
        b: random(225),
      },
    ]);
  });

  return winner ? (
    <WinCard socket={socket} winner={winner} congrats={congrats} />
  ) : (
    <BingoGame socket={socket} />
  );
}

function random(num) {
  return Math.floor(Math.random() * num);
}
