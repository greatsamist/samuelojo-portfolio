import React, { ReactNode, useEffect } from "react";
import styles from "./modal.module.scss";
import { MdClose } from "react-icons/md";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  children: JSX.Element | ReactNode;
  position?: "normal" | "center";
}

export const Modal = ({
  setIsOpen,
  isOpen,
  position = "normal",
  children,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className={styles.modal}
      onClick={() => setIsOpen(false)}
      style={{ alignItems: position }}
    >
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        {children}
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
