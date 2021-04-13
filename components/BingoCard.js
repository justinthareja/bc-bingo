import { BingoCell } from "./BingoCell";
import styles from "./BingoGame.module.css";

export function BingoCard({ cells, handleClick, winningLine }) {
  function renderCell(i) {
    const { value, isChecked } = cells[i];
    const isWinner = winningLine.includes(i);

    return (
      <BingoCell
        value={value}
        isChecked={isChecked}
        onClick={handleClick(i)}
        isWinner={isWinner}
      />
    );
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.b}>
              <span>B</span>
            </th>
            <th className={styles.i}>
              <span>I</span>
            </th>
            <th className={styles.n}>
              <span>N</span>
            </th>
            <th className={styles.g}>
              <span>G</span>
            </th>
            <th className={styles.o}>
              <span>O</span>
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr className={styles.tr}>
            {renderCell(0)}
            {renderCell(1)}
            {renderCell(2)}
            {renderCell(3)}
            {renderCell(4)}
          </tr>
          <tr className={styles.tr}>
            {renderCell(5)}
            {renderCell(6)}
            {renderCell(7)}
            {renderCell(8)}
            {renderCell(9)}
          </tr>
          <tr className={styles.tr}>
            {renderCell(10)}
            {renderCell(11)}
            {renderCell(12)}
            {renderCell(13)}
            {renderCell(14)}
          </tr>
          <tr className={styles.tr}>
            {renderCell(15)}
            {renderCell(16)}
            {renderCell(17)}
            {renderCell(18)}
            {renderCell(19)}
          </tr>
          <tr className={styles.tr}>
            {renderCell(20)}
            {renderCell(21)}
            {renderCell(22)}
            {renderCell(23)}
            {renderCell(24)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
