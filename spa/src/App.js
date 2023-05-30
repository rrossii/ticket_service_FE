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

import {AddEvent} from "./components/AddEvent"
import {EventPage} from "./components/EventPage"
import {Festival} from "./components/Festival"
import {Concert} from "./components/Concert"
import {Sport} from "./components/Sport"
import {Theater} from "./components/Theater"

import {UpdateEvent} from "./components/UpdateEvent"

import {OrderEvent} from "./components/OrderEvent"
import {PurchaseHistory} from "./components/PurchaseHistory"

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
            <Route path='/add-event' element={<AddEvent/>}/>
            <Route path='/event/:eventId' element={<EventPage/>}/>
            <Route path='/festival' element={<Festival/>}/>
            <Route path='/concert' element={<Concert/>}/>
            <Route path='/sport' element={<Sport/>}/>
            <Route path='/theater' element={<Theater/>}/>
            <Route path='/update-event/:eventId' element={<UpdateEvent/>}/>
            <Route path='/order-event/:eventId' element={<OrderEvent/>}/>
            <Route path='/purchase-history' element={<PurchaseHistory/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
