import React from 'react'

const Tag = ({name,selectTag,selected}) => {
  const nameStyle = {
    HTML:`bg-[#fda821]`,
    CSS:`bg-red-300`,
    ReactJs:`bg-[#ffd12c]`,
    Javascript:`bg-teal-500`,
    default:`bg-[#f9f9f9]`

  }
  const tagStyle = selected ? nameStyle[name] : nameStyle.default;
  return (
    <button 
    type='button'
    onClick={()=>selectTag(name)}
    className={`font-mono ${tagStyle} tracking-widest bg-[#f9f9f9] border-1 border-[#dfe3e6] rounded-lg px-2 py-1 mr-3 cursor-pointer mb-1`}>{name}</button>
  )
}

export default Tag