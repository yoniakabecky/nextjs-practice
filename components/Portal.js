import * as React from "react";
import { createPortal } from "react-dom";

const Portal = ({ id, children }) => {
  const el = React.useRef(
    document.getElementById(id) || document.createElement("div")
  );
  const [dynamic] = React.useState(!el.current.parentElement);

  React.useEffect(() => {
    if (dynamic) {
      el.current.id = id;
      document.body.appendChild(el.current);
    }

    return () => {
      el.current.parentElement.removeChild(el.current);
    };
  }, [id]);
  return createPortal(children, el.current);
};

export default React.memo(Portal);
