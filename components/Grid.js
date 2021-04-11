import * as React from "react";
import styles from "./Grid.module.css";

export default function Grid({ children, columns = 5, rows = 5 }) {
  if (children.length !== columns * rows) {
    // current styling only works when all children are present
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
