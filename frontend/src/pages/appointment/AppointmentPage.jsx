// src/pages/AppointmentPage.js
import React, { useState } from 'react';
import './AppointmentPage.css'; // Create a CSS file for styling

const AppointmentPage = () => {
    const [appointments, setAppointments] = useState([]);
    const [patientName, setPatientName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState('');

    const handleAddAppointment = (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!patientName || !date || !time) {
            setError('Please fill in all fields');
            return;
        }

        const newAppointment = { patientName, date, time };
        setAppointments([...appointments, newAppointment]);

        // Clear form fields
        setPatientName('');
        setDate('');
        setTime('');
    };

    return (
        <div className="appointment-container">
            <h2>Manage Appointments</h2>
            <form onSubmit={handleAddAppointment}>
                <div>
                    <label htmlFor="patientName">Patient Name:</label>
                    <input
                        type="text"
                        id="patientName"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Add Appointment</button>
            </form>

            <h3>Upcoming Appointments</h3>
            <ul>
                {appointments.length > 0 ? (
                    appointments.map((appointment, index) => (
                        <li key={index}>
                            {appointment.patientName} - {appointment.date} at {appointment.time}
                        </li>
                    ))
                ) : (
                    <li>No appointments scheduled.</li>
                )}
            </ul>
        </div>
    );
};

export default AppointmentPage;
