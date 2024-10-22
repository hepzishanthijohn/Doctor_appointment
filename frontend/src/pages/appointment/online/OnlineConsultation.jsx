// src/pages/OnlineConsultation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './OnlineConsultation.css';

const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology', contact: 'john@example.com' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatology', contact: 'jane@example.com' },
    { id: 3, name: 'Dr. Emily Johnson', specialty: 'Pediatrics', contact: 'emily@example.com' },
];

const OnlineConsultation = () => {
    return (
        <>
        <h2 className='header'>Online Consultations</h2>
        <div className="online-consultation-container">
           
            <div className="doctor-list">
                {doctors.map((doctor) => (
                    <div className="doctor-card" key={doctor.id}>
                        <h3>{doctor.name}</h3>
                        <p>Specialty: {doctor.specialty}</p>
                        <p>Contact: {doctor.contact}</p>
                        <Link to={`/booking/${doctor.id}`}>
                            <button>Book Appointment</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div></>
    );
};

export default OnlineConsultation;
