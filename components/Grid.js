import * as React from "react";
import styles from "./Grid.module.css";

export function Grid({ children, columns = 5, rows = 5 }) {
  // current styling only works when all children are present
  if (children.length !== columns * rows) {
    throw new Error("Number of grid children must equal total grid cells");
  }

  return (
    <div className={styles.gridBorder}>
      <div
        style={{
          ["--grid-num-columns"]: columns,
          ["--grid-num-rows"]: rows,
        }}
        className={styles.grid}
      >
        {children}
      </div>
    </div>
  );
}

export function GridCell({ children }) {
  return <div className={styles.gridCell}>{children}</div>;
}
