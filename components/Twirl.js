import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Twirl.module.css";

export function Twirl({ children, in: inProp }) {
  return (
    <CSSTransition
      in={inProp}
      timeout={1000}
      classNames={{ ...styles }}
      mountOnEnter
      unmountOnExit
    >
      <div className={styles.twirl}>{children}</div>
    </CSSTransition>
  );
}
