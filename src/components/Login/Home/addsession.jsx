import React, { useState } from 'react';

function Addsession() {
  const [sessionTitle, setSessionTitle] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [sessionDescription, setSessionDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Session Details:', {
      sessionTitle,
      sessionDate,
      sessionTime,
      sessionDescription,
    });
    // Reset form fields
    setSessionTitle('');
    setSessionDate('');
    setSessionTime('');
    setSessionDescription('');
  };

  return (
    <div className="max-w-full mt-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-center">Add New Session</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="sessionTitle">
            Session Title
          </label>
          <input
            type="text"
            id="sessionTitle"
            value={sessionTitle}
            onChange={(e) => setSessionTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Session Title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="sessionDate">
            Date
          </label>
          <input
            type="date"
            id="sessionDate"
            value={sessionDate}
            onChange={(e) => setSessionDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="sessionTime">
            Time
          </label>
          <input
            type="time"
            id="sessionTime"
            value={sessionTime}
            onChange={(e) => setSessionTime(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="sessionDescription">
            Description
          </label>
          <textarea
            id="sessionDescription"
            value={sessionDescription}
            onChange={(e) => setSessionDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Session Description"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#4c5d34] text-white py-3 rounded-lg hover:bg-[#818763] focus:outline-none focus:ring-2 focus:ring-[#4c5d34]"
        >
          Add Session
        </button>
      </form>
    </div>
  );
}

export default Addsession;