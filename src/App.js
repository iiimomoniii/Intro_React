import logo from './logo.svg';
import './App.css';
import EX1_destructuring from './components/ex1_destructuring';
import EX2_destructuring_variable from './components/ex2_destructuring_variable';
function App() {
  return (
    <div className="App">
      {/*destructuring*/}
      <EX1_destructuring usernameHint="Username" passwordHint="Password" />
      {/*destructuring_variable*/}
      <EX2_destructuring_variable/>
    </div>
  );
}

export default App;
