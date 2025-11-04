import {type FC} from 'react';
import type { LinkInterface } from '../../../types/LinkInterface';
import styles from "./Link.module.css";

const LinkTo: FC<LinkInterface> = ({ Path, Text, CustomClass }) => {
  return (
    <a className={`${styles.LinkTo} ${CustomClass}`} href={Path}>
      {Text}
    </a>
  );
};

export default LinkTo;
