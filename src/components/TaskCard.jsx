import React from 'react'
import Tag from './Tag'
import { MdDeleteForever } from "react-icons/md";

const TaskCard = ({title ,tags,handleDelete,index,setActiveCard}) => {
  return (
    <article draggable onDragStart={()=>setActiveCard(index)} onDragEnd={()=>setActiveCard(null)} className='w-full min-h-[100px] border-2 border-[#dcdcdc] rounded-lg p-4 mt-2 active:opacity-75'>
        <p className='text-lg font-semibold mb-4'>{title}</p>
        <div className='flex justify-between items-center'>
            <div>
                {tags.map((tag,index)=>(
                    <Tag key={index} name ={tag} selected ={true}/>
                ))}
            </div>
            <div>
                <MdDeleteForever onClick={()=>handleDelete(index)} className='text-2xl cursor-pointer opacity-50 hover:opacity-80' />
                </div>
        </div>
    </article>
  )
}

export default TaskCard