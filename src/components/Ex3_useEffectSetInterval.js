import React, {useEffect, useState} from 'react'

export default function Ex3_useEffectSetInterval() {
    //0
    const [count, setCount] = useState(0);
    const someValue = () => {
        //2. some value
        setCount(previus => previus + 1)
    }
    useEffect(()=>{
        //1. set Interval in 1 sec
        const  intervalId = setInterval(someValue,1000);
        //4. clear Interval
        return () => {
            clearInterval(intervalId)
        }
    },[count])
  return (
    //3. view count
    <div><h1>{count}</h1></div>
  )
}
