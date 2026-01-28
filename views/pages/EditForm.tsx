import { useParams } from "react-router-dom";
import UpdateTask from "../UI/molecules/UpdateTask/UpdateTask";

const EditForm = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Editing Task: {id}</h1>
      <UpdateTask taskId={id} />
    </div>
  );
};

export default EditForm;
