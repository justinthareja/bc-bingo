import { Loader } from "../components/Loader";
import styles from "./Input.module.scss";
// https://codepen.io/bertdida/pen/xyPKRX
export function Input({ value, onChange, onBlur, onSubmit, isLoading }) {
  return (
    <div className={styles["c-wrap"]}>
      <input className={styles["c-checkbox"]} type="checkbox" id="checkbox" />
      <div className={styles["c-formContainer"]}>
        <form className={styles["c-form"]} onSubmit={onSubmit}>
          <input
            className={styles["c-form__input"]}
            placeholder="Enter your name"
            type="text"
            required
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          <label className={styles["c-form__buttonLabel"]} htmlFor="checkbox">
            <button className={styles["c-form__button"]} type="button">
              {isLoading ? <Loader /> : "Send"}
            </button>
          </label>
          <label
            className={styles["c-form__toggle"]}
            htmlFor="checkbox"
            data-title="Play"
          ></label>
        </form>
      </div>
    </div>
  );
}
