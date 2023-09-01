import logo from './logo.svg';
import './App.css';
import Ex1_funct from './components/ex1_functional_props_custom_event_listeners';
function App() {
  const submit = () =>{
    alert("Hey from variable");
  }
  return (
    <div className="App">
      {/*pass alert from function*/}
      <Ex1_funct handleSubmit={()=>{alert("Hey from function")}}/>
       {/*pass alert from function short form*/}
      <Ex1_funct handleSubmit={()=>alert("Hey from function")}/>
      {/*pass alert from variable*/}
      <Ex1_funct handleSubmit={submit}/>
    </div>
  );
}

export default App;
