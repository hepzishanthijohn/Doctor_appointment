import React, { useEffect, useState } from 'react';
import SplashScreen from './SplashPage';
import Carousel from '../../components/carousel/Carousel';

const IntroPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Show splash for 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? <SplashScreen /> : <Carousel />}
        </div>
    );
};

export default IntroPage;
