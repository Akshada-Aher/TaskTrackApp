import { useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
   
    setTasks([...tasks, task]);
     
  };

  return (
    <div className="app">
      <h1 className="title">Task Tracker</h1>

      <TaskForm addTask={addTask} />

      <main className="app_main">
        <section className="task_column">
          <h2>Todo</h2>

          {tasks
            .filter((task) => task.status === "Todo")
            .map((task) => (
              <div className="task_card" key={task.id}>
                <h3>{task.name}</h3>
                <p>{task.tag}</p>
              </div>
            ))}
        </section>

        <section className="task_column">
          <h2>Doing</h2>

          {tasks
            .filter((task) => task.status === "Doing")
            .map((task) => (
              <div className="task_card" key={task.id}>
                <h3>{task.name}</h3>
                <p>{task.tag}</p>
              </div>
            ))}
        </section>

        <section className="task_column">
          <h2>Done</h2>

          {tasks
            .filter((task) => task.status === "Done")
            .map((task) => (
              <div className="task_card" key={task.id}>
                <h3>{task.name}</h3>
                <p>{task.tag}</p>
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}

export default App;