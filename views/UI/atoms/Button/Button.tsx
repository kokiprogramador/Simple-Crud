import { FC } from 'react';
import ComponentsInterface from '../../../types/ComponentsInterface.tsx';
import styles from './Button.module.css';

const Button: FC<ComponentsInterface> = ({ Text, CustomClass, Type, Onclick }) => {
  return (
    <button
      onClick={Onclick}
      type={Type}
      className={`${styles.button} ${CustomClass}`}
    >
      {Text}
    </button>
  );
};

export default Button;
