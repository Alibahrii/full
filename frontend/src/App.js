import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Menu from './Pages/Menu.js';
function App() {
  return (
    <div className="App1">
     <HashRouter>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Menu" element={<Menu/>}/>
      </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
