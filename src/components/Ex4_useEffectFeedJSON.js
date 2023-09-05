import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function Ex4_useEffectFeedJSON() {
    //0.
    const [dataArray, setDataArray] = useState(null);
    //1.use useEffect get data from api
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
            //2.destructing data
            const {data} = result;
            console.log(data);
            // alert(JSON.stringify(data));
            //3.setData
            setDataArray(data);
        })
    },[])
  return (
    <div>
        {/* #Debug {JSON.stringify(dataArray)} */}
        {/* 4. display item.id and item.title*/}
        <ul>{dataArray && dataArray.map(item=><li key={item.id}>{item.id}. {item.title}</li>)}</ul>
    </div>
  )
}
