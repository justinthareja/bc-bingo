import * as React from "react";

import { getBingoOptions, checkWin } from "../utils/helpers";
import { BingoCard } from "./BingoCard";

export function BingoGame({ socket }) {
  const bingoOptions = React.useMemo(() => getBingoOptions(25), []);
  const [cells, setCells] = React.useState(
    bingoOptions.map((value) => ({ value, isChecked: false }))
  );

  const winningLine = checkWin(cells);

  React.useEffect(() => {
    if (winningLine.length !== 0) {
      // trigger win
      socket.emit("win");
    }
  }, [winningLine.length, socket]);

  const toggleIsChecked = (i) => () => {
    const newCells = cells.slice();
    const cell = newCells[i];
    cell.isChecked = !cell.isChecked;
    setCells(newCells);
  };

  return (
    <BingoCard
      cells={cells}
      handleClick={toggleIsChecked}
      winningLine={winningLine}
    />
  );
}
