import Image from "next/image";
import { useRouter } from "next/router";

export function WinCard({ winner, socket, congrats }) {
  const router = useRouter();
  const emitCongrats = (content) => () => {
    socket.emit("congrats", { ...content, to: winner.userID });
  };

  return (
    <div>
      <button
        onClick={() => {
          socket.disconnect();
          router.push("/");
        }}
      >
        New Game
      </button>
      {winner === "You" ? (
        <div>
          <h1>You Win!</h1>
          {congrats.map(({ from, type, message, left }, i) => {
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
            return (
              <div
                className="floater chat-bubble"
                style={{ left }}
                key={`${from}-${i}`}
              >
                <div className="chat-message">{message}</div>
                <div className="chat-author">- {from}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>{winner.username} Wins!</h1>
          <h2>Send Congrats</h2>
          <button
            onClick={emitCongrats({
              type: "bubble",
              message: `Good Job ${winner.username}`,
            })}
          >
            Good Job
          </button>
          <button
            onClick={emitCongrats({
              type: "bubble",
              message: `Congrats ${winner.username}`,
            })}
          >
            Congrats!
          </button>
          <button
            onClick={emitCongrats({
              type: "thumbs-up",
            })}
          >
            Thumbs Up!
          </button>
        </div>
      )}
    </div>
  );
}
