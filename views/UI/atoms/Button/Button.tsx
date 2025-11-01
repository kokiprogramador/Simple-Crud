import { FC } from 'react';
import { ComponentsInterface } from "../../../types/ComponentsInterface.tsx";
import styles from "./styles.module.css";

const Button: FC<ComponentsInterface> = ({
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
