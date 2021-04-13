import * as React from "react";
import confetti from "canvas-confetti";
import { getBingoOptions, checkWin } from "../utils/helpers";
import { BingoCard } from "./BingoCard";
import styles from "./BingoGame.module.css";

export function BingoGame() {
  const bingoOptions = React.useMemo(() => getBingoOptions(25), []);
  const [cells, setCells] = React.useState(
    bingoOptions.map((value) => ({ value, isChecked: false }))
  );

  const winningLine = checkWin(cells);

  React.useEffect(() => {
    if (winningLine.length !== 0) {
      confetti({ spread: 90, particleCount: 100, origin: { y: 1 } });
    }
  }, [winningLine.length]);

  const toggleIsChecked = (i) => () => {
    const newCells = cells.slice();
    const cell = newCells[i];
    cell.isChecked = !cell.isChecked;
    setCells(newCells);
  };

  return (
    <div className={styles.bingoWrapper}>
      <BingoCard
        cells={cells}
        handleClick={toggleIsChecked}
        winningLine={winningLine}
      />
    </div>
  );
}
