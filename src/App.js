import './App.css';
import Ex1_useState from './component/Ex1_useState';
import Ex2_useStateObject from './component/Ex2_useState_Object';
import Ex3_useStateArray from './component/Ex3_useState_Array';
function App() {
  
  return (
    <div className="App">
      <span>useState</span>
      <Ex1_useState/>
      <br/>
      <span>useStateObject</span>
      <Ex2_useStateObject/>
      <br/>
      <span>useStateArray</span>
      <Ex3_useStateArray/>
    </div>
  );
}

export default App;
