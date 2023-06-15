import React from 'react'

export const ChildA = ({handleTitle}) => {


const handleClick=()=>{
    const val ="updated value"
    handleTitle(val)
}

  return (
    <div>
          <h3> This is  ChildA Page</h3>
          <button onClick={handleClick} >Update</button>
    </div>
  )
}
