import React, { useState } from "react";
import "./Reminder.css";

function Reminder() {
  const [reminder, setReminder] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const handleEventReminder = (event) => {
    setNewReminder(event.target.value);
  };
  const handleEventDisplay = () => {
    setNewReminder('');
    if (newReminder.trim()) {
      setReminder([...reminder, newReminder]);
      

    }
  };

  const handleDeleteReminder = (index) => {
    setReminder(reminder.filter((item, itemIndex) => itemIndex !== index));
  };
  return (
    <div className="container">
      <h1>Reminder App</h1>
      <div className="div-input">
        <input
          type="text"
          placeholder="Enter a reminder"
          value={newReminder}
          onChange={handleEventReminder}
        />
        <button className="btn-add" onClick={handleEventDisplay}>
          Add
        </button>
      </div>
      {
        reminder.length > 0 ?(
        <ul className="reminder-list">
        {reminder.map((data, index) => (
          <li key={index}>
            {data}
            <button
              onClick={() => handleDeleteReminder(index)}
              className="btn-delete"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>):
      <p>No Reminders Found</p>

      }
    </div>
  );
}

export default Reminder;
