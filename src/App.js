import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Ex1_useEffect from './components/Ex1_useEffect';
import Ex2_useEffectDestroyListener from './components/Ex2_useEffectDestroyListener';
function App() {

  const [isShow , setIsShow] = useState(true);

  return (
    <div className="App">
       <Ex1_useEffect/>
      {isShow && <Ex2_useEffectDestroyListener/>} 
     <button onClick={()=>setIsShow(false)}>Hide</button>
    </div>
  );
}

export default App;
