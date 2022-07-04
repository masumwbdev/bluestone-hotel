import React from 'react';
import './DisplayRooms.css'
import img1 from '../../assets/rimg1.png'
import img2 from '../../assets/rimg2.png'
import img3 from '../../assets/rimg3.png'
import img4 from '../../assets/rimg4.png'

const DisplayRooms = () => {
    return (
        <div className='mt-5 display-room mb-5'>
            <h1 className='text-center mb-5'>Rooms and suites</h1>
            <div className="width-control display-room-card">
                <div className="single-card">
                    <img src={img1} alt="" />
                    <div className="card-title">
                        <p>Guest Rooms</p>
                    </div>
                </div>
                <div className="single-card">
                    <img src={img2} alt="" />
                    <div className="card-title">
                        <p>Suits</p>
                    </div>
                </div>
                <div className="single-card">
                    <img src={img3} alt="" />
                    <div className="card-title">
                        <p>Executive</p>
                    </div>
                </div>
                <div className="single-card">
                    <img src={img4} alt="" />
                    <div className="card-title">
                        <p>Accessible</p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5 display-btn'>
                <button>View All Rooms</button>
            </div>
        </div>
    );
};

export default DisplayRooms;