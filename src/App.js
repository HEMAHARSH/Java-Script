import './App.css';

//import ReferenceFunction from './ReactAdditional/ReferenceFunction';
//import Validate from './ReactAdditional/Validation';
import Home from './Project/Home';
import Contact from './Project/Contact';
import About from './Project/About';
import Login from './Project/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//Routing
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}   />
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/about" element={<About/>}   />
     <Route path="/login" element={<Login/>}   />
     </Routes></BrowserRouter>
     </div>
     
     );
    }
    
    export default App;
    //<ReferenceFunction/>

