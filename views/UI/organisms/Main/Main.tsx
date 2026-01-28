import PostTasks from "../../molecules/PostTasks/PostTasks";
import GetTasks from "../../molecules/GetTasks/GetTasks";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.Main}>
      <PostTasks />
      <GetTasks />
    </main>
  );
};

export default Main;
