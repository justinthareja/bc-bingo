import * as React from "react";
import { bingoOptions, checkWin } from "../utils/helpers";
import { BingoCard } from "./BingoCard";

export function BingoGame() {
  const [cells, setCells] = React.useState(
    bingoOptions.slice(0, 25).map((value) => ({ value, isChecked: false }))
  );

  const toggleIsChecked = (i) => () => {
    const newCells = cells.slice();
    newCells[i].isChecked = !newCells[i].isChecked;
    setCells(newCells);
  };

  return (
    <BingoCard
      cells={cells}
      handleClick={toggleIsChecked}
      winningLine={checkWin(cells)}
    />
  );
}
