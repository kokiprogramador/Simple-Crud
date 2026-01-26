import { type FC } from "react";
import type { ButtonsInterface } from "../../../types/ButtonsInterface.tsx";
import styles from "./styles.module.css";

const Button: FC<ButtonsInterface> = ({ Text, CustomClass, variant }) => {
  return (
    <button type={variant} className={`${styles.button} ${CustomClass}`}>
      {Text}
    </button>
  );
};

export default Button;
