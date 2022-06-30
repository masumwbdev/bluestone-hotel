import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Dining from '../pages/Dining/Dining';
import Events from '../pages/Events/Events';
import Gallery from '../pages/Gallery/Gallery';
import Home from '../pages/Home/Home';
import Info from '../pages/Info/Info';
import Location from '../pages/Location/Location';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Offers from '../pages/Offers/Offers';
import Register from '../pages/Register/Register';
import Rooms from '../pages/Rooms/Rooms';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='rooms' element={<Rooms />} />
                <Route path='hotel-info' element={<Info />} />
                <Route path='offers' element={<Offers />} />
                <Route path='gallery' element={<Gallery />} />
                <Route path='location' element={<Location />} />
                <Route path='dining' element={<Dining />} />
                <Route path='events' element={<Events />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Router;