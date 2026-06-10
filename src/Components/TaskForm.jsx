import { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask }) => {

  const [taskName, setTaskName] = useState("");
  const [tag, setTag] = useState("React");
  const [status, setStatus] = useState("Todo");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName.trim()) return;

    addTask({
      id: Date.now(),
      name: taskName,
      tag,
      status,
    });

    setTaskName("");
    setTag("React");
    setStatus("Todo");
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <div className="task_form_bottom">
          <select
            className="task_status"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>React</option>
          </select>

          <select
            className="task_status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Todo">Todo</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>

          <button type="submit" className="task_submit">
            Add Task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;