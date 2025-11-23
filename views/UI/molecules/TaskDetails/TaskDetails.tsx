const TaskDetails = ({ task }) => {
  return (
    <div>
      <h4>{task.content}</h4>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetails;
