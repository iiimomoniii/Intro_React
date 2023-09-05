import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Ex1_useEffect from './components/Ex1_useEffect';
import Ex2_useEffectDestroyListener from './components/Ex2_useEffectDestroyListener';
import Ex3_useEffectSetInterval from './components/Ex3_useEffectSetInterval';
function App() {

  const [isShow , setIsShow] = useState(true);

  return (
    <div className="App">
      <span>useEffect</span>
       <Ex1_useEffect/>
       <br />
       <span>useEffect Destroy Listener</span>
      {isShow && <Ex2_useEffectDestroyListener/>} 
      <button onClick={()=>setIsShow(false)}>Hide</button>
      <br />
      <span>useEffect SetInterva</span>
      <Ex3_useEffectSetInterval/>
    </div>
  );
}

export default App;
