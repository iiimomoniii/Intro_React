import logo from './logo.svg';
import './App.css';
import Ex1Props from './components/ex1_props';
function App() {
  return (
    <div className="App">
      <Ex1Props count={1} color="#f00"/>
    </div>
  );
}

export default App;
