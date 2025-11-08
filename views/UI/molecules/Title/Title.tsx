import Headings from "../../atoms/Headings/Headings";
import Img from "../../atoms/Img/Img";
import styles from "./Title.module.css";

const Title = () => {
  return (
    <div className={styles.Title}>
      <Headings Text="To do" TypeHeader="h1" CustomClass={styles.Title_Text} />
      <div className={styles.Title_Logo}>
        <Img
          src="./SmirkLogo.png"
          alt="img"
          CustomClass={styles.Title_Logo_Img}
        />
      </div>
    </div>
  );
};

export default Title;
