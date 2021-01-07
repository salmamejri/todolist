import react from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtodo from './Component/Addtodo'
import Todolist from './Component/Todolist';
function App() {
  return (
    <div  className="App">
  <Addtodo/>
  <Todolist/>
  
    </div>
  );
}

export default App;
