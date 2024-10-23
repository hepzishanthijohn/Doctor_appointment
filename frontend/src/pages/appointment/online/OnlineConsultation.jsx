// src/pages/OnlineConsultation.js
import React from 'react';
import { Link } from 'react-router-dom';
import doc1 from '../../../assets/images/doc1.png'
import doc2 from '../../../assets/images/doc2.png'
import doc3 from '../../../assets/images/doc4.png'
import './OnlineConsultation.css';

const doctors = [
    { id: 1, name: 'Dr. John Doe',img: doc1, specialty: 'Cardiology', contact: 'john@example.com' },
    { id: 2, name: 'Dr. Jane Smith',img: doc2, specialty: 'Dermatology', contact: 'jane@example.com' },
    { id: 3, name: 'Dr. Emily Johnson',img: doc3, specialty: 'Pediatrics', contact: 'emily@example.com' },
];

const OnlineConsultation = () => {
    return (
        <>
        <h2 className='header'>Online Consultations</h2>
        <div className="online-consultation-container">
           
            <div className="doctor-list">
                {doctors.map((doctor) => (
                    <div className="doctor-card" key={doctor.id}>
                        <img src={doctor.img} alt="" />
                        <h3>{doctor.name}</h3>
                        <p>Specialty: {doctor.specialty}</p>
                        <p>Contact: {doctor.contact}</p>
                        <Link style={{backgroundColor: "#1f1469"}} to={`/booking/${doctor.id}`}>
                            <button>Book Appointment</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div></>
    );
};

export default OnlineConsultation;
