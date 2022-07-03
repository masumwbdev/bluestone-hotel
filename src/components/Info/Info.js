import React from 'react';
import './Info.css'

const Info = () => {
    return (
        <div className='info-container'>
            <div className="width-control info">
                <div className="reviews">
                    <p className='headline'>Reviews</p>
                    <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <span>Based on 1,650 Reviews</span>
                    <p>4.5 | 5 Reviews</p>
                </div>
                <div className="call-us">
                    <p className='headline'>Call us</p>
                    <p>+11 20 7676 1211</p>
                    <p className='headline'>Email us</p>
                    <p>bluestone@email.com</p>
                </div>
                <div className="address">
                    <p className='headline'>Address</p>
                    <p>Rock Way</p>
                    <p>Osaka Road, S43-5, UK</p>
                </div>
                <div className="arrival-time">
                    <p className='headline'>Arrival time</p>
                    <div className="d-flex">
                        <div className='check-in p-2'>
                            <p>Check in</p>
                            <p>08:00 AM</p>
                        </div>
                        <div className='p-2'>
                            <p>Check out</p>
                            <p>11:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;