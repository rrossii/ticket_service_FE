import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import {NavigBar} from "./components/NavigBar";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";
import {Login} from "./components/Login";
import {Registration} from "./components/Registration";
import {AdminProfile} from "./components/AdminProfile";

function App() {
  return (
      <BrowserRouter>
        <NavigBar/>
        <div className="main">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/admin' element={<AdminProfile/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
