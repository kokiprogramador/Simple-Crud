import { useParams } from "react-router-dom";
import DeleteTask from "../../molecules/DeleteTask/DeleteTask";
import UpdateTask from "../../molecules/UpdateTask/UpdateTask";

const EditFormMain = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h1>Editing Task: {id}</h1>
      <UpdateTask taskId={id} />
      <DeleteTask taskId={id} />
    </>
  );
};

export default EditFormMain;
