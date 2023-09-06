import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Ex1_useEffect from './components/Ex1_useEffect';
import Ex2_useEffectDestroyListener from './components/Ex2_useEffectDestroyListener';
import Ex3_useEffectSetInterval from './components/Ex3_useEffectSetInterval';
import Ex4_useEffectFeedJSON from './components/Ex4_useEffectFeedJSON';
import UseContext_Main from './components2/useContext_Main';
import Ex1_useMemo from './components3/Ex1_useMemo';
function App() {

  const [isShow , setIsShow] = useState(true);

  return (
    //components
    // <div className="App">
    //   //Ex1
    //   <span>useEffect</span>
    //    <Ex1_useEffect/>
    //    <br />
    //   //Ex2
    //    <span>useEffect Destroy Listener</span>
    //   {isShow && <Ex2_useEffectDestroyListener/>} 
    //   <br />
    //   <button onClick={()=>setIsShow(false)}>Hide</button>
    //   <br />
    //   //Ex3
    //   <span>useEffect SetInterval</span>
    //   <Ex3_useEffectSetInterval/>
    //   //Ex4
    //   <span>useEffect Feed JSON</span>
    //   <Ex4_useEffectFeedJSON/>
    // </div>

    //component2
    // <div>
    //   <UseContext_Main/>
    // </div>

    //component3
    <div>
      <Ex1_useMemo/>
    </div>
  );
}

export default App;
