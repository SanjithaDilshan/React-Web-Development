import { useState } from "react";
import "./AddTask.css";

export const AddTask = () => {

    const[taskValue, setTaskValue] = useState("");

    const handleReset = () => {
        setTaskValue("");
    }

  return (
    <section className="addtask">
        <form>
            <input onChange={(e) => setTaskValue(e.target.value)} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" value={taskValue}/>
            <button type="submit">Add Task</button>
            <button onClick={handleReset} className="reset">Reset</button>
        </form>
        <p>{taskValue.length}</p>
    </section>
  )
}

export default AddTask
