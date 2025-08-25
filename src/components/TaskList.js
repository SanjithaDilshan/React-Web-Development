import React, { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import "./TaskList.css";

export const TaskList = ({info}) => {
    const[tasks,setTasks] = useState([
        {id:5271, name: "Record Lectures",completed:true},
        {id:7825, name: "Edit React Lectures",completed: false},
        {id:8391, name: "Watch Lectures",completed: false}]);

    const[show, setShow] = useState(false);
    const styles = {
            color: show ? "#3D8361" : "#be3434",
            border: "2px solid " ,
            borderColor: show ? "#3D8361" : "#be3434" ,
            borderRadius: "5px",
            fontSize: "28px",
            padding: "20px"
            }

    function handleDelete(id){
    setTasks(tasks.filter(task => task.id !==id))
        }
  return (
    <section className='tasklist'>
        <h1 style={styles}>Task List</h1>
        <button className='trigger' onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        <ul>
        { show && tasks.map((task) => (
            <TaskCard key={task.id} info = {info} task={task} handleDelete={handleDelete}/>
        ))}
        
        </ul>
        <BoxCard result="success">
            <p className="title">Offer Notification</p>
            <p className="description">Lorem ipsum dolor sit amet consectelur adipisicing elit.Perferendis,vel!</p>
         </BoxCard>

        <BoxCard className="warning">
            <p className="title">Cookie Notification</p>
            <p className="description">Lorem ipsum dolor sit amet consectelur adipisicing elit.Perferendis,vel!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, laborum saepe adipisci error, voluptatibus consectetur ex iste architecto voluptas iusto aperiam ab, beatae obcaecati accusantium maxime laboriosam dolor? Molestias, porro.</p>
        </BoxCard>
    </section>    
  )
}

export default TaskList
