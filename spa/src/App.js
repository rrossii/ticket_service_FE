import './App.css';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import {NavigBar} from "./components/NavigBar";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";
import {Login} from "./components/Login";

function App() {
  return (
      <BrowserRouter>
        <NavigBar/>
        <div className="main">
          <Routes>
            <Route path='' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
