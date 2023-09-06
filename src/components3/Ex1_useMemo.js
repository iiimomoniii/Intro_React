import React, {useState, useMemo} from 'react'

export default function Ex1_useMemo() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={()=>{setCount(prev => prev+1)}}>Increase</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <Content a={1} b={count}/>
    </div>
  )
}

const Content = ({a,b})=>{
    const memorizeRandom = useMemo(()=>{
        //call random 1 time when click
        return Math.random();
    },[a]);
    //call random all time when click
    const random = Math.random();

    return (
        <div>
            <h1>A/B: {a}/{b}</h1>
            <h1>Random: {random}</h1>
            <h1>MemorizedRandom : {memorizeRandom}</h1>
        </div>
    )
}

