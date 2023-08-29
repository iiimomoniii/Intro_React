import React,  {useState} from 'react'

export default function CounterFunctionalComponent() {
    //use React Hook
    const [count, setCount] = useState(0);
  return (
    <div style={{backgroundColor: "yellow"}}>
        <h1>Counter Class Component</h1>
        <h3>Counter : {count}</h3>
        <button onClick={()=>
            setCount(count+1)
        }>Add</button>
    </div>
  )
}
