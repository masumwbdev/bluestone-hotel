import React from 'react';
import Alert from '../../components/Alert/Alert';
import Banner from '../../components/Banner/Banner';
import Info from '../../components/Info/Info';
import Title from '../../components/Title/Title';
import Navbar from '../../shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Title />
            <Alert />
            <Banner />
            <Info />
        </div>
    );
};

export default Home;