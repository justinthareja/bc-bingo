import * as React from "react";
import { getBingoOptions, checkWin } from "../utils/helpers";
import { BingoCard } from "./BingoCard";
import styles from "./BingoGame.module.css";

export function BingoGame() {
  const bingoOptions = React.useMemo(() => getBingoOptions(25), []);
  const [cells, setCells] = React.useState(
    bingoOptions.map((value) => ({ value, isChecked: false }))
  );

  const toggleIsChecked = (i) => () => {
    const newCells = cells.slice();
    const cell = newCells[i];
    cell.isChecked = !cell.isChecked;
    setCells(newCells);
  };

  return (
    <div className={styles.cardWrapper}>
      <BingoCard
        cells={cells}
        handleClick={toggleIsChecked}
        winningLine={checkWin(cells)}
      />
    </div>
  );
}
