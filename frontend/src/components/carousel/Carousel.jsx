import React from 'react';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';
import ScheduleImage from '../../assets/images/scheduleImage.avif';
import smartCheckup from '../../assets/images/smtCheck.webp';
import tablet from '../../assets/images/tablet.jpg';

const Carousel = () => {
    const navigate = useNavigate();

    return (
        <div className="carouselContainer">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="banner-item">
                            <img src={ScheduleImage} alt="Schedule Appointments" className="carousel-image" />
                            <div className="textContent">
                                <h3>Book Appointments Hassle-Free</h3>
                                <p>Choose from a list of experienced healthcare professionals.</p>
                                <button className="btn-skip" onClick={() => navigate('/login')}>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner-item">
                            <img src={tablet} alt="Personalized Medicine" className="carousel-image" />
                            <div className="textContent">
                                <h3>Personalized Medicine Reminders</h3>
                                <p>Stay on top of your treatment plan with timely notifications.</p>
                                <button className="btn-skip" onClick={() => navigate('/login')}>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner-item">
                            <img src={smartCheckup} alt="Smart Checkup" className="carousel-image" />
                            <div className="textContent">
                                <h3>Experience the Future of Healthcare</h3>
                                <p>Get instant health insights and personalized recommendations.</p>
                                <button className="btn-skip" onClick={() => navigate('/login')}>Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
