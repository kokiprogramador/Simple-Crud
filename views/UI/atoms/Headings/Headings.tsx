import { FC } from "react";
import { ComponentsInterface } from "../../../types/ComponentsInterface.tsx";
import styles from "./Headings.module.css";

const Headings: FC<ComponentsInterface> = ({ Text, TypeHeader, CustomClass }) => {
  switch (TypeHeader) {
    case "h1":
      return <h1 className={`${styles.Heading} ${CustomClass}`}>{Text}</h1>;
    case "h2":
      return <h2 className={`${styles.Heading} ${CustomClass}`}>{Text}</h2>;
    case "h3":
      return <h3 className={`${styles.Heading} ${CustomClass}`}>{Text}</h3>;
    case "h4":
      return <h4 className={`${styles.Heading} ${CustomClass}`}>{Text}</h4>;
    case "h5":
      return <h5 className={`${styles.Heading} ${CustomClass}`}>{Text}</h5>;
    case "h6":
      return <h6 className={`${styles.Heading} ${CustomClass}`}>{Text}</h6>;
    default:
      return <h1 className={`${styles.Heading} ${CustomClass}`}>{Text}</h1>;
  }
};

export default Headings;
