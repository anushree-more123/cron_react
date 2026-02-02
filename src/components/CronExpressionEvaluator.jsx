/*

Create Cron Expression Parsing Module that has the following functionalities.

1. Renders cron expression input field

2. Parses and displays individual cron fields accurately

Example:
Input: '0 15 12 1 JAN MON'
Output:
Seconds: 0 (active)
Minutes: 15 (active)
Hours: 12 (active)
Days: 1 (active)
Month: JAN (active)
Day of Week: MON (active)

3. Handles default values appropriately when * is used

Example:
Input: '* * * * * *'
Output:
Seconds: *
Minutes: *
Hours: *
Days: *
Month: *
Day of Week: *

4. Resets all fields gracefully when an invalid cron expression is detected (e.g., incorrect number of parts)

Example:
Input: '0 15 12 1 JAN'
Output:
Seconds: *
Minutes: *
Hours: *
Days: *
Month: *
Day of Week: *

5. Trims extra spaces and still parses the expression correctly

Example:
Input: '    0    15   12    1    JAN    MON   '
Output:
Seconds: 0 (active)
Minutes: 15 (active)
Hours: 12 (active)
Days: 1 (active)
Month: JAN (active)
Day of Week: MON (active)

NOTE: You are free to implement the task in any other way as well but shouldn't be hardcoded.

*/

import React, { useState } from "react";

const defaultFields = {
  seconds: "*",
  minutes: "*",
  hours: "*",
  days: "*",
  month: "*",
  dayOfWeek: "*",
};

const CronExpressionEvaluator = () => {
  const [cronInput, setCronInput] = useState("* * * * * *");
  const [fields, setFields] = useState(defaultFields);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setCronInput(value);

    const parts = value.trim().split(/\s+/);

    if (parts.length !== 6) {
      setFields(defaultFields);
      return;
    }

    setFields({
      seconds: parts[0],
      minutes: parts[1],
      hours: parts[2],
      days: parts[3],
      month: parts[4],
      dayOfWeek: parts[5],
    });
  };

  const displayValue = (val) => (val === "*" ? "*" : `${val} (active)`);

  return (
    <div className="cron-evaluator">
      <div className="cron-inputs">
        <label htmlFor="cronInput">Cron Expression</label>
        <input
          type="text"
          id="cronInput"
          value={cronInput}
          onChange={handleInputChange}
          placeholder="e.g., 0 */5 * * * *"
        />
      </div>

      <div className="cron-fields-preview">
        <h4>Parsed Fields</h4>

        <div className="cron-field">
          <strong>Seconds:</strong> {displayValue(fields.seconds)}
        </div>
        <div className="cron-field">
          <strong>Minutes:</strong> {displayValue(fields.minutes)}
        </div>
        <div className="cron-field">
          <strong>Hours:</strong> {displayValue(fields.hours)}
        </div>
        <div className="cron-field">
          <strong>Days:</strong> {displayValue(fields.days)}
        </div>
        <div className="cron-field">
          <strong>Month:</strong> {displayValue(fields.month)}
        </div>
        <div className="cron-field">
          <strong>Day of Week:</strong> {displayValue(fields.dayOfWeek)}
        </div>
      </div>
    </div>
  );
};

export default CronExpressionEvaluator;
