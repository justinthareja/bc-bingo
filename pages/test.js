import * as React from "react";
import { CSSTransition } from "react-transition-group";

export default function Test() {
  const [inProp, setInProp] = React.useState(false);
  return (
    <div>
      <CSSTransition
        in={inProp}
        timeout={1000}
        classNames="twirl"
        mountOnEnter
        unmountOnExit
      >
        <h1>something</h1>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Enter
      </button>
      <button type="button" onClick={() => setInProp(false)}>
        Click to Exit
      </button>
    </div>
  );
}
