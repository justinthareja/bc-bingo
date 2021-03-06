import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import confetti from "canvas-confetti";
import { useSocket } from "../hooks/useSocket";
import { BingoGame } from "../components/BingoGame";
import { WinCard } from "../components/WinCard";
import { Twirl } from "../components/Twirl";

export default function Bingo() {
  const [winner, setWinner] = React.useState(null);
  const [congrats, setCongrats] = React.useState([]);
  const socket = useSocket();
  const router = useRouter();
  const isWinner = winner && winner.userID === socket.id;
  const isLoser = winner && winner.userID !== socket.id;

  useSocket("win", (winner) => {
    setWinner(winner);
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

  if (isLoser) {
    return <WinCard socket={socket} winner={winner} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      {isWinner && (
        <button
          onClick={() => {
            socket.disconnect();
            router.push("/");
          }}
        >
          New Game
        </button>
      )}
      <BingoGame socket={socket} />
      <Twirl in={isWinner}>
        <h3>YOU WIN!!!</h3>
      </Twirl>
      <div>
        {congrats.map(({ from, type, message, left, r, g, b }, i) => {
          if (type === "thumbs-up") {
            return (
              <div className="floater" style={{ left }} key={`${from}-${i}`}>
                <Image
                  src="/images/thumbs-up.png"
                  alt="Thumbs up"
                  height={50}
                  width={50}
                />
              </div>
            );
          }
          if (type === "balloon") {
            return (
              <div
                className="floater balloon"
                style={{
                  left,
                  backgroundColor: `rgba(${r},${g},${b},0.7)`,
                  color: `rgba(${r},${g},${b},0.7)`,
                  boxShadow: `inset -7px -3px 10px rgba(${r - 10},${g - 10},${
                    b - 10
                  },0.7) `,
                }}
                key={`${from}-${i}`}
              ></div>
            );
          }
          return (
            <div className="floater" style={{ left }} key={`${from}-${i}`}>
              <div className="bubble">
                <div className="bubble-message">&ldquo;{message}&rdquo;</div>
                <div className="bubble-author">- {from}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function random(num) {
  return Math.floor(Math.random() * num);
}
