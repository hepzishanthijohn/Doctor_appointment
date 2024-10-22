import React from 'react';
import { Link } from 'react-router-dom';
import onlineConsultation from '../../assets/images/scheduleImage.avif';
import offlineConsultation from '../../assets/images/smtcheck.webp';
import './HomePage.css';

const HomePage = () => {
    return (
        <>
        <h2 className='header'>Create Appointment</h2>
        <div className="home-container">
            
            <div className="card-container">
                <div className="card">
                    <img src={onlineConsultation} alt="Online Consultations" className="card-image" />
                    <h3>Online Consultations</h3>
                    <p>Manage your online consultations and appointments.</p>
                    <Link to="/online-consultation">
                        <button >View Online Consultations</button>
                    </Link>
                </div>
                <div className="card">
                    <img style={{height:'29vh',marginBottom:'29px'}} src={offlineConsultation} alt="Offline Consultations" className="card-image" />
                    <h3>Offline Consultations</h3>
                    <p>Manage your offline consultations and appointments.</p>
                    <Link to="/appointments">
                        <button >View Offline Consultations</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default HomePage;
