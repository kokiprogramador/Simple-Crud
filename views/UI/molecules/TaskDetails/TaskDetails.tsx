import { Link } from "react-router-dom";
import { useState } from "react";
import Headings from "../../atoms/Headings/Headings";
import Paragraph from "../../atoms/Paragraph/Paragrah";
import Button from "../../atoms/Button/Button";
import styles from "./TaskDetail.module.css";

const TaskStatus = (task) => {
  console.log(task);
  if (task.isComplete === true) {
    return <div>Done</div>;
  } else {
    return <div>Not done</div>;
  }
};

const TaskDetails = ({ task }) => {
  console.log(task);
  return (
    <div className={styles.Card}>
      <TaskStatus task={task} />
      <Headings
        Text={task.content}
        TypeHeader="h3"
        CustomClass={styles.Card_Title}
      />
      <Paragraph Text={task.description} CustomClass={styles.Card_Content} />
      <Link to={`/editform/${task.id}`}>
        <Button
          variant="button"
          Text="Edit"
          Onclick={(e) => {
            console.log("Editando tarea:", task.id);
          }}
          CustomClass=""
        />
      </Link>
    </div>
  );
};

export default TaskDetails;
