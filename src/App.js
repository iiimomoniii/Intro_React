import logo from './logo.svg';
import './App.css';
import Ex1_Pre from './components/ex1_prevent_default';
function App() {
  const submit = () => {
    alert("hey");
  }
  return (
    <div className="App">
      <Ex1_Pre handleSubmit={submit}/>
    </div>
  );
}

export default App;
