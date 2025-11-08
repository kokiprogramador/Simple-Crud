import type { FC } from 'react';
import type { ImgInterface } from '../../../types/ImgInterface';
import styles from "./Img.module.css";

const Img: FC<ImgInterface> = ({src, CustomClass, alt}) =>{
  return <img className={`${styles.Img} ${CustomClass}`} src={src} alt={alt}/>;  
}

export default Img;
