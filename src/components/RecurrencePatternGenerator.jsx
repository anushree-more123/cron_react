/*

Create Recurrence Pattern Description Module that has the following functionalities

1 .Renders recurrence pattern select field

2 .Shows daily pattern description with the selected time

Example:
Input:
Pattern: Daily
Time: 10:30 AM
Output: Runs every day at 10:30.

3. Displays weekly pattern description with selected days and time

Example:
Input:
Pattern: Weekly
Days Selected: Monday, Friday
Time: 08:30 AM
Output: Runs every week on Monday, Friday at 08:30.

4. Falls back to a generic weekly description when no days are selected

Example:
Input:
Pattern: Weekly
Days Selected: 'None'
Time: 06:30 PM
Output: Runs every week at 18:30.

5. Shows monthly pattern description with selected date and time

Example:
Input:
Pattern: Monthly
Date Selected: 15
Time: 09:00 AM
Output: Runs every month on the 15th day at 09:00.

6. Handles ordinal suffixes correctly (e.g., 1st, 2nd, 3rd, 11th, etc.)

NOTE: You are free to implement the task in any other way as well but shouldn't be hardcoded.

*/

import React, { useState } from "react";

const daysList = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const RecurrencePatternGenerator = () => {
  const [pattern, setPattern] = useState("daily");
  const [time, setTime] = useState("10:30");
  const [selectedDays, setSelectedDays] = useState([]);
  const [date, setDate] = useState(1);

  const handlePatternChange = (e) => {
    setPattern(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleDayChange = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const generateDescription = () => {
    if (pattern === "daily") {
      return `Runs every day at ${time}.`;
    }

    if (pattern === "weekly") {
      if (selectedDays.length === 0) return `Runs every week at ${time}.`;

      return `Runs every week on ${selectedDays.join(", ")} at ${time}.`;
    }

    if (pattern === "monthly") {
      return `Runs every month on the ${getOrdinalSuffix(
        Number(date),
      )} day at ${time}.`;
    }

    return "";
  };
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  return (
    <div className="recurrence-form">
      <div className="form-group">
        <label htmlFor="pattern">Recurrence Pattern</label>
        <select id="pattern" value={pattern} onChange={handlePatternChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          className="time-input"
          value={time}
          onChange={handleTimeChange}
        />
      </div>
      {pattern === "weekly" && (
        <div>
          <label>Days of Week</label>
          {daysList.map((day) => (
            <label key={day} style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={selectedDays.includes(day)}
                onChange={() => handleDayChange(day)}
              />
              {day}
            </label>
          ))}
        </div>
      )}
      {pattern === "monthly" && (
        <div>
          <label>Day of Month</label>
          <input
            type="number"
            min="1"
            max="31"
            value={date}
            onChange={handleDateChange}
          />
        </div>
      )}

      <div className="description">
        <h3>Generated Description:</h3>
        <p>{generateDescription()}</p>
      </div>
    </div>
  );
};

export default RecurrencePatternGenerator;
