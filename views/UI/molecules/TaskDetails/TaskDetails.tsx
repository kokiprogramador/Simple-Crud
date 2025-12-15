import Headings from "../../atoms/Headings/Headings";
import Paragraph from "../../atoms/Paragraph/Paragrah";
import styles from "./TaskDetail.module.css";

const TaskDetails = ({ task }) => {
  return (
    <div className={styles.Card}>
      <Headings
        Text={task.content}
        TypeHeader="h3"
        CustomClass={styles.Card_Title}
      />
      <Paragraph Text={task.description} CustomClass={styles.Card_Content} />
    </div>
  );
};

export default TaskDetails;
