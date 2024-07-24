import React, { useState } from 'react'

const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop] = useState(false)
  return (
    <section 
    onDragEnter={()=>setShowDrop(true)} 
    onDragLeave={()=>setShowDrop(false)} 
    onDrop={()=>{
        onDrop()
        setShowDrop(false)

    }}
    onDragOver={(e)=>e.preventDefault()}
    className={showDrop ? `w-full min-h-[100px] border-2 border-[#dcdcdc] rounded-lg p-4 mt-2 transition-opacity duration-300`: `opacity-0`}>
    Drop Here</section>
  )
}

export default DropArea