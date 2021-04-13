import classNames from "classnames/bind";
import styles from "./BingoGame.module.css";

const cx = classNames.bind(styles);

export function BingoCell({ value, onClick, isChecked, isWinner }) {
  return (
    // eslint-disable-next-line
    <td className={styles.cell} onClick={onClick}>
      {value}
      {isChecked && <div className={cx({ marker: true, isWinner })}></div>}
    </td>
  );
}
