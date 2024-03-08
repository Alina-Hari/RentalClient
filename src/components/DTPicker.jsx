import React, { useState, useEffect } from 'react';

export default function DTPicker() {
  
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [range, setRange] = useState([]);
  const newDate = range;
  const dateNow = new Date(Date.now()).toISOString().slice(0, 10).toString();
  const [disableDateTwo, setDisableDateTwo] = useState(true);
  const [disableTimeTwo, setDisableTimeTwo] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);


  function addDateTime() {
    if (endDate > startDate && endTime > startTime) {
      newDate.push({ startDate, endDate , startTime , endTime });
      setRange(newDate);
      setErrorMessage(false);
      console.log(range)
    }
    else {
      setErrorMessage(true);
    }
  }

  function handleStartDate(e) {
    setStartDate(e.target.value);
    setDisableDateTwo(false);
  }
  function handleEndDate(e) {
    setEndDate(e.target.value);
  }
  function handleStartTime(e) {
    setStartTime(e.target.value);
    setDisableTimeTwo(false);
  }
  function handleEndTime(e) {
    setEndTime(e.target.value);
  }

  return (
    <div className="flex flex-row justify-start flex-wrap w-100 gap-16">
      <div>
        <input type="date" id="startDate" min={dateNow} onChange={handleStartDate} />
        <input type="date" id="endDate" disabled={disableDateTwo} min={startDate} onChange={handleEndDate} />
      </div>
      <div>
        <input type="time" id="startTime" max="21:00" onChange={handleStartTime} />
        <input type="time" id="endTime"  disabled={disableTimeTwo} max="21:00" onChange={handleEndTime} />
      </div>
      {errorMessage && <p>Start date/time cannot be greater than end date/time</p>}
      <button onClick={addDateTime}>Add</button>
    </div>

  );
}