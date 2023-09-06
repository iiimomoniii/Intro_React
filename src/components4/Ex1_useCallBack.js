import React , {useState, useCallback}from 'react'

export default function Ex1_useCallBack() {
    //0.
    const [count, setCount] = useState(1);
    return (
    <div>
        <button onClick={()=>{setCount(prev => prev+1)}}>Increase</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <Content id={count}/>
    </div>
  )
}
//1. function 
const Content = ({id}) => {
    console.log("Re-render");
    //2.cache function using useCallback
    const handleClick = useCallback(()=>{
        console.log("Click");
    },[id]);

    return (
        <div>
            <h1>UseCallback Demo{id}</h1>
            {/*3.click for cache function*/}
            <button onClick={handleClick}>Test</button>
        </div>
    )
}
