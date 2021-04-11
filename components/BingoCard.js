import { BINGO_OPTIONS } from "../utils/bingoOptions";
import styles from "./BingoCard.module.css";

export function BingoCard() {
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
            {BINGO_OPTIONS.slice(0, 5).map((option) => (
              <td key={option} className={styles.cell}>
                {option}
              </td>
            ))}
          </tr>
          <tr className={styles.tr}>
            {BINGO_OPTIONS.slice(5, 10).map((option) => (
              <td key={option} className={styles.cell}>
                {option}
              </td>
            ))}
          </tr>
          <tr className={styles.tr}>
            {BINGO_OPTIONS.slice(10, 15).map((option) => (
              <td key={option} className={styles.cell}>
                {option}
              </td>
            ))}
          </tr>
          <tr className={styles.tr}>
            {BINGO_OPTIONS.slice(15, 20).map((option) => (
              <td key={option} className={styles.cell}>
                {option}
              </td>
            ))}
          </tr>
          <tr className={styles.tr}>
            {BINGO_OPTIONS.slice(20, 25).map((option) => (
              <td key={option} className={styles.cell}>
                {option}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function B() {
  return (
    <th className={styles.b}>
      <span>B</span>
    </th>
  );
}
