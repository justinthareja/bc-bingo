import cn from "classnames";
import styles from "./Button.module.css";

export default function Button({ children, type }) {
  return (
    <button
      type="button"
      className={cn({
        [styles.primary]: !type || type === "primary",
        [styles.secondary]: type === "secondary",
      })}
    >
      {children}
    </button>
  );
}
