import { MouseEventHandler } from "react";
import styles from "./standardbutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: string;
  width?: "100%" | "auto";
  disabled?: boolean;
}

export const StandardButton = ({
  children,
  onClick,
  type,
  width,
  disabled,
}: Props) => {
  return (
    <button
      onClick={onClick}
      style={{ width: width }}
      typeof={type}
      className={styles.standardButton}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
