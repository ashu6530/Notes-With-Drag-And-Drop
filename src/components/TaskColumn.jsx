import React from "react";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({ icon, name, status, tasks, handleDelete ,setActiveCard,onDrop}) => {
  console.log(tasks);
  return (
    <section className="w-80">
      <h2 className="font-bold text-xl font-mono">
        {icon} {name}
      </h2>
      <DropArea onDrop={()=>onDrop(status,0)}/>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <React.Fragment key={index} >
            <TaskCard 
            title={task.task} 
            tags={task.tags} 
            handleDelete = {handleDelete}
            index={index}
            setActiveCard={setActiveCard}
            />
            <DropArea  onDrop={()=>onDrop(status,index+1)}/>
            </React.Fragment>
            
          )
      )}
    </section>
  );
};

export default TaskColumn;
