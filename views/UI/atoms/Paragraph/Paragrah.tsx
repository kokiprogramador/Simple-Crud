import { FC } from "react";
import type ParagraphInterface from "../../../types/ParagraphInterface";

const Paragraph: FC<ParagraphInterface> = ({ Text, CustomClass }) => {
  return <p className={`Paragraph ${CustomClass}`}>{Text}</p>;
};

export default Paragraph;
