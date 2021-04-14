export function WinCard({ winner }) {
  return (
    <div>{winner === "You" ? <h1>You Win!</h1> : <h1>{winner} Wins!</h1>}</div>
  );
}
