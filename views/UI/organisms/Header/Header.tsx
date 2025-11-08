import Title from "../../molecules/Title/Title.tsx";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.Header}>
      <Title />
    </div>
  );
};

export default Header;
