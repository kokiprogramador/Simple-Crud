import { useState, useEffect } from "react";
import TaskDetails from "../TaskDetails/TaskDetails";

const GetTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const GetAllTasks = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    GetAllTasks();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (tasks.length === 0) {
    return <div>There's no data.</div>;
  }


  return (
    <>
      {tasks.map((task) => (
        <div>
          <TaskDetails key={task.id} task={task} />
        </div>
      ))}
    </>
  );
};

export default GetTasks;
