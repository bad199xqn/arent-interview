import { useEffect, useRef, MutableRefObject, ReactElement } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: ReactElement }) {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    modalRoot.classList.add("show-modal");
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
        modalRoot.classList.remove("show-modal");
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};