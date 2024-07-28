import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import NotificationInbox from "./components/NotificationInbox";

const oldTasks = localStorage.getItem('tasks')
console.log(oldTasks);

const App = () => {
  const [tasks, setTask] = useState(JSON.parse(oldTasks) || []);
  const [activeCard,setActiveCard] =useState(null)
  useEffect(()=>{
     localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])
  console.log(tasks);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTask(newTasks);
  };
  const onDrop =(status,position)=>{
  console.log(`${activeCard} is going to place into ${status} and at the ${position}`);
  if(activeCard == null || activeCard === undefined) return ;
  const taskToMove = tasks[activeCard];
  const updatedTasks = tasks.filter((task,index)=>index !=activeCard)
  updatedTasks.splice(position,0,{
    ...taskToMove,
    status:status
  })
  setTask(updatedTasks)
  }
  return (
    <>
    <div className="grid grid-rows-[150px] h-screen">
    
      <TaskForm setTasks={setTask} />
      <main className="flex justify-center gap-4 mt-8">
        <TaskColumn  icon="🌟" name="To do" tasks={tasks} status="todo" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskColumn icon="🔥" name="Doing" tasks={tasks} status="doing" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskColumn icon="✅" name="Done" tasks={tasks} status="done" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop}  />
      </main>
      <div className="text-center">
     <NotificationInbox/>
    </div>
    </div>
    
    </>
  );
};

export default App;
