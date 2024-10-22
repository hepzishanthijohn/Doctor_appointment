import React from 'react';
import './SplashPage.css';
import docImage from '../../assets/images/docIntro.webp'


const SplashScreen = () => {
    return (
        <div className="splash-screen">
            <img src={docImage} alt="" />
            <h1>Health Desk</h1>
            <p>Loading...</p>
        </div>
    );
};

export default SplashScreen;
