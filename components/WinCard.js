import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./WinCard.module.css";

export function WinCard({ winner, socket }) {
  const router = useRouter();
  const emitCongrats = (content) => () => {
    socket.emit("congrats", { ...content, to: winner.userID });
  };

  return (
    <div className={styles.container}>
      <h1>{winner.username} Wins!</h1>
      <button
        onClick={() => {
          socket.disconnect();
          router.push("/");
        }}
      >
        New Game
      </button>

      <div>
        <button
          onClick={emitCongrats({
            type: "bubble",
            message: `Good Eyes ${winner.username}!!!`,
          })}
        >
          <Image
            src="/images/eyes.png"
            alt="Good Eyes"
            height={50}
            width={50}
          />
        </button>
        <button
          onClick={emitCongrats({
            type: "bubble",
            message: `Congrats ${winner.username}!!`,
          })}
        >
          <Image
            src="/images/congrats.png"
            alt="Congrats"
            height={50}
            width={50}
          />
        </button>
        <button
          onClick={emitCongrats({
            type: "thumbs-up",
          })}
        >
          <Image
            src="/images/thumbs-up.png"
            alt="Thumbs up"
            height={50}
            width={50}
          />
        </button>
        <button
          onClick={emitCongrats({
            type: "balloon",
          })}
        >
          <Image
            src="/images/balloons.png"
            alt="Send Balloons"
            height={50}
            width={30}
          />
        </button>
      </div>
    </div>
  );
}
