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
          <button
            onClick={emitCongrats({
              type: "balloon",
            })}
          >
            Send Balloons!
          </button>
        </div>
      )}
    </div>
  );
}
