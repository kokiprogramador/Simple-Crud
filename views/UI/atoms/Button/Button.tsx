import { FC } from 'react';
import { ButtonsInterface } from "../../../types/ButtonsInterface.tsx";
import styles from "./styles.module.css";

const Button: FC<ButtonsInterface> = ({
  Text,
  CustomClass,
  variant,
  Onclick,
}) => {
  return (
    <button
      onClick={Onclick}
      type={variant}
      className={`${styles.button} ${CustomClass}`}
    >
      {Text}
    </button>
  );
};

export default Button;
