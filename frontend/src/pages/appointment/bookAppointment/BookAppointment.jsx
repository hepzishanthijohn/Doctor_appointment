// src/pages/BookAppointment.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookAppointment.css';

const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology', contact: 'john@example.com' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatology', contact: 'jane@example.com' },
    { id: 3, name: 'Dr. Emily Johnson', specialty: 'Pediatrics', contact: 'emily@example.com' },
];

const BookAppointment = () => {
    const { doctorId } = useParams();
    const navigate = useNavigate();
    const doctor = doctors.find(doc => doc.id === parseInt(doctorId));

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [availableSlots] = useState(['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM']);

    const handleContinue = () => {
        if (selectedSlot) {
            navigate('/continue', { state: { doctor, date: selectedDate, slot: selectedSlot } });
        } else {
            alert('Please select a time slot.');
        }
    };

    return (
        <div className="booking-container">
            <h2>Book Appointment with {doctor.name}</h2>
            <div>
                <label htmlFor="date">Select Date:</label>
                <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                />
            </div>
            {selectedDate && (
                <div>
                    <h3>Available Slots for {selectedDate}</h3>
                    <ul>
                        {availableSlots.map((slot) => (
                            <li key={slot}>
                                <button onClick={() => setSelectedSlot(slot)}>
                                    {slot}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <button onClick={handleContinue} disabled={!selectedSlot}>Continue</button>
        </div>
    );
};

export default BookAppointment;
