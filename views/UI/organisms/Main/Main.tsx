import GetTasks from "../../molecules/GetTasks/GetTasks";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.Main}>
      <GetTasks />
    </main>
  );
};

export default Main;
