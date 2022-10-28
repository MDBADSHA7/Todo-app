import './App.css';
import Navbar from './Componant/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Componant/Home/Home';
import Calender from './Componant/Calender/Calender';
import ToDo from './Componant/ToDo/ToDo';
import NotFound from './Componant/NotFound/NotFound';
import CompletedTask from './Componant/CompletedTask/CompletedTask';
import About from './Componant/About/About';
import EditTask from './Componant/EditTask/EditTask';
function App() {
  return (
    <div className="px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/completedTask" element={<CompletedTask></CompletedTask>}></Route>
        <Route path="/todo/add" element={<ToDo></ToDo>}></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>
        <Route path="/aboutme" element={<About></About>}></Route>
        <Route path="/edittask/:id" element={<EditTask></EditTask>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
