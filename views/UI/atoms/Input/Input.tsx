import { FC } from "react";
import ComponentsInterface from "../../../types/ComponentsInterface.tsx";
import styles from "./Input.module.css";

const Input: FC<ComponentsInterface> = ({ Type, PlaceHolder, Value, Name, OnChange, CustomClass }) => {
  return (
    <input
      type={Type}
      placeholder={PlaceHolder}
      value={Value}
      name={Name}
      onChange={OnChange}
      className={`${styles.Heading} ${CustomClass}`}
    />
  );
};

export default Input;
