import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Carousel.css';
import ScheduleImage from '../../assets/images/scheduleImage.avif';
import smartCheckup from '../../assets/images/smtcheck.webp';
import tablet from '../../assets/images/pills1.webp';

const images = [
  {
    src: ScheduleImage,
    title: 'Book Appointments Hassle-Free',
    description: 'Choose from a list of experienced healthcare professionals.',
    buttonText: 'Get Started',
  },
  {
    src: tablet,
    title: 'Personalized Medicine Reminders',
    description: 'Stay on top of your treatment plan with timely notifications.',
    buttonText: 'Learn More',
  },
  {
    src: smartCheckup,
    title: 'Experience the Future of Healthcare',
    description: 'Get instant health insights and personalized recommendations.',
    buttonText: 'Explore Now',
  },
];

const Carousel = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <img src={images[currentIndex].src} alt={`Slide ${currentIndex}`} />
        <div className="textContent">
          <h3>{images[currentIndex].title}</h3>
          <p>{images[currentIndex].description}</p>
          <button
            className="btn-skip"
            onClick={() => navigate('/login')}
          >
            {images[currentIndex].buttonText}
          </button>
        </div>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            _
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;



