import React, { useEffect, useState } from 'react'
import { ChildA } from './ChildA'
import { ChildB } from './ChildB'

export const Parent = (prop) => {

    const [title,setTitle] = useState('');

    // logic stored in hub as parent and pass the function to ChildA and value as title to the childB as in props.
    const handleTitle=(val)=>{
        setTitle(val);
    }

  return (
    <div>
        <h3>Parent Page</h3>
        <ChildA  handleTitle={handleTitle} />
        <ChildB title ={title} />
    </div>
  )
}
