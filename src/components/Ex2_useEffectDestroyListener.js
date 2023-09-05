import React, { useEffect, useState } from 'react'

export default function Ex1_useEffect() {

    const [count, setCount] = useState(0);

  {/*re-load component when need to update value using effect */}
  useEffect(() =>{
    // Called whenever state is changed
    document.title = "Current count : " + count
    return () => {
      // Called when component is destroy
      document.title = "The component was just destroyed"
    };
  }, [count])
  return (

    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Add</button>
    </div>
  )
}
