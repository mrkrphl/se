import './App.css';
import Home from "./Pages/Home";
import {Routes, Route, Link} from "react-router-dom";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
