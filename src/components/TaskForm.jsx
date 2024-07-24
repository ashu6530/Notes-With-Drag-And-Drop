import React, { useState } from "react";
import Tag from "./Tag";

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: []
  });

  const handleChange = (e) => {
    const {name,value} = e.target
    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    setTasks(prev=>{
        return [...prev,taskData]
    })
    setTaskData({
        task: "",
        status: "todo",
        tags: []
      })
  }

  const checkTag = (tag) =>{
    return taskData.tags.some(item => item === tag)
  }
  
  const selectTag =(tag)=>{
    if(taskData.tags.some((item)=>item === tag)){
        const filterTags = taskData.tags.filter(item => item !== tag)
        setTaskData(prev => {
            return {
                ...prev,
                tags:filterTags
            }
        })
    }else{
        setTaskData(prev=>{return {
            ...prev,
            tags:[...prev.tags,tag]
        }})
    }
  
  }
  return (
    <header className="row-span-1 flex items-center justify-center border-b-2 border-[#dcdcdc] p-4">
      <form onSubmit={handleSubmit} className="w-1/2  text-center">
        <input
          value={taskData.task}
          className="text-lg w-full text-black  font-mono bg-[#f9f9f9] focus:outline-[#dfe3e6] rounded-lg px-4 py-2 mb-4 placeholder:text-blue-500"
          type="text"
          name="task"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="flex justify-between items-center">
          <div className="">
            <Tag name="HTML"  selectTag ={selectTag} selected={checkTag('HTML')} />
            <Tag name="CSS" selectTag ={selectTag} selected={checkTag('CSS')}/>
            <Tag name="Javascript" selectTag ={selectTag} selected={checkTag('Javascript') }/>
            <Tag name="ReactJs" selectTag ={selectTag} selected={checkTag('ReactJs')}/>
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              className="border-1 bg-[#f9f9f9] border-[#999] focus:outline-[#dfe3e6] w-[120px] h-[40px]  rounded-sm px-2 py-2 mr-3 mb-2"
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button
            
             className="font-semibold bg-blue-500 rounded-sm px-2 py-2 mr-3 cursor-pointer text-white">
              {" "}
              + Add Task{" "}
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
