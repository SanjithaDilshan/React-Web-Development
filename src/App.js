import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import './App.css';

function App() {
  const info="Random";
return (
  <div className="App">
    <Header/>
    <TaskList xyz={info} />
    
  </div>
  );
}

export default App;

