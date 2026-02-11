import { useState } from "react";
import Headings from "../../atoms/Headings/Headings";
import Button from "../../atoms/Button/Button";
import Modal from "../../../CustomComponents/Modal/Modal";
import { useNavigate } from "react-router-dom";
import styles from "./DeleteTask.module.css";

const DeleteTask = ({ taskId }) => {
  console.log(taskId);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const DeleteTask = async () => {
    try {
      const data = await fetch(
        `http://localhost:8000/api/deleteTask/${taskId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const response = await data.json();
      console.log(`Task deleted sucessfully${data} `);
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };
  return (
    <div>
      <Button
        variant={"button"}
        Text={"Delete Task"}
        CustomClass={""}
        onClick={() => setShow(true)}
      />
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <Headings
          Text={"Do you REALLY want to delete this task?"}
          CustomClass={""}
          TypeHeader={"h3"}
        />
        <Button
          variant={"button"}
          Text={"Yes"}
          CustomClass={""}
          onClick={DeleteTask}
        />
      </Modal>
    </div>
  );
};

export default DeleteTask;
