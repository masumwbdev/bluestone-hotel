import React from 'react';
import Alert from '../../components/Alert/Alert';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import Navbar from '../../shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Title />
            <Alert />
            <Banner />
        </div>
    );
};

export default Home;