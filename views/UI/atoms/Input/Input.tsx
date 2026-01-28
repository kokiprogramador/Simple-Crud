import { FC } from "react";
import { InputsInterface } from "../../../types/InputsInterface";
import styles from "./Input.module.css";

const Input: FC<InputsInterface> = ({
  Type,
  PlaceHolder,
  Value,
  Name,
  OnChange,
  CustomClass,
  Required,
}) => {
  return (
    <input
      type={Type}
      placeholder={PlaceHolder}
      value={Value}
      name={Name}
      onChange={OnChange}
      className={`${styles.Heading} ${CustomClass}`}
      required={Required}
    />
  );
};

export default Input;
