import React from 'react';
import Alert from '../../components/Alert/Alert';
import Title from '../../components/Title/Title';
import Navbar from '../../shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Title />
            <Alert />
        </div>
    );
};

export default Home;