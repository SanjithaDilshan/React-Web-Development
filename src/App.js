import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import './App.css';

function App() {
  const info="Random";
return (
  <div className="App">
    <Header/>
    <TaskList />
    <Footer />
    
  </div>
  );
}

export default App;

