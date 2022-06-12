import './App.css';
import Home from "./Pages/Home";
import {Routes, Route, Link} from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<AboutUs/>}/>
        <Route exact path='/contact' element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
