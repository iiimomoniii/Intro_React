import './App.css';
import Ex1Props from './components/ex1_props';
import {useState} from 'react';
function App() {
  const [count, setCount]= useState(0);
  return (
    <div className="App">
      <button onClick={()=>{
        setCount(count+1)
      }}>Add</button>
      <Ex1Props count={count} color="#f00"/>
    </div>
  );
}

export default App;
