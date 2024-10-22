// src/pages/PatientDetails.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientDetails.css';

const patients = [
    { id: 1, name: 'John Smith', contact: 'john.smith@example.com', age: 30 },
    { id: 2, name: 'Jane Doe', contact: 'jane.doe@example.com', age: 25 },
    { id: 3, name: 'Emily Johnson', contact: 'emily.johnson@example.com', age: 40 },
];

const PatientDetails = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);
    const navigate = useNavigate();

    const handlePatientChange = (e) => {
        const selectedId = parseInt(e.target.value);
        const patient = patients.find(p => p.id === selectedId);
        setSelectedPatient(patient);
    };

    const handleContinue = () => {
        if (selectedPatient) {
            navigate('/booking-successful');
        } else {
            alert('Please select a patient.');
        }
    };

    return (
        <div className="patient-details-container">
            <h2>Choose Patient</h2>
            <h3>Who are you booking an appointment for?</h3>
            <div>
                <label htmlFor="patientSelect">Select Patient:</label>
                <select
                    id="patientSelect"
                    onChange={handlePatientChange}
                    required
                >
                    <option value="">--Select a Patient--</option>
                    {patients.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                            {patient.name}
                        </option>
                    ))}
                </select>
            </div>
            {selectedPatient && (
                <div className="patient-info">
                    <h4>Patient Details</h4>
                    <p><strong>Name:</strong> {selectedPatient.name}</p>
                    <p><strong>Contact:</strong> {selectedPatient.contact}</p>
                    <p><strong>Age:</strong> {selectedPatient.age}</p>
                    <button onClick={handleContinue}>Continue</button>
                </div>
            )}
        </div>
    );
};

export default PatientDetails;
