import { useRouter } from "next/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export function WinCard({ winner, socket, congrats }) {
  const router = useRouter();
  const emitCongrats = (message) => () => {
    socket.emit("congrats", { message, to: winner.userID });
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
          {congrats.map(({ from, message, left }, i) => (
            <div
              className="floater chat-bubble"
              style={{ left }}
              key={`${from}-${i}`}
            >
              <div className="chat-message">{message}</div>
              <div className="chat-author">- {from}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>{winner.username} Wins!</h1>
          <h2>Send Congrats</h2>
          <button onClick={emitCongrats("Good Job")}>Good Job</button>
          <button onClick={emitCongrats("Nice Work!")}>Congrats!</button>
        </div>
      )}
    </div>
  );
}
