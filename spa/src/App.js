import './styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import {NavigBar} from "./components/NavigBar";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";
import {Login} from "./components/Login";
import {Registration} from "./components/Registration";
import {AdminProfile} from "./components/AdminProfile";
import {UserProfile} from "./components/UserProfile";
import {UpdateProfile} from "./components/UpdateProfile";
import {UserListing} from "./components/UserListing";


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
            <Route path='/user-profile' element={<UserProfile/>}/>
            <Route path='/update-profile' element={<UpdateProfile/>}/>
            <Route path='/user-list' element={<UserListing/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
