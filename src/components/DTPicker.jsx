import React, { useState, useEffect } from 'react';

export default function DTPicker({ setAvailableDates }) {

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const dateNow = new Date(Date.now()).toISOString().slice(0, 10).toString();
  const [disableDateTwo, setDisableDateTwo] = useState(true);
  const [disableTimeTwo, setDisableTimeTwo] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [disableDatesBtn, setDisableDatesBtn] = useState(false);


  function addDateTime() {
    if (endDate > startDate && endTime > startTime) {
      const startDateTime = new Date(startDate + 'T' + startTime);
      const endDateTime = new Date(endDate + 'T' + endTime);

      // Create a new array with Date objects
      const newDates = [startDateTime, endDateTime];
      setAvailableDates(newDates);
      setErrorMessage(false);
      setDisableDatesBtn(true)
      console.log(newDates);
    } else {
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
  function editDateTime() {
    setDisableDatesBtn(false)
    setStartDate();
    setEndDate();
    setStartTime();
    setEndTime();
    setDisableDateTwo(true)
    setDisableTimeTwo(true);
    setAvailableDates();
  }
  return (
    <div className="flex flex-col  justify-start flex-wrap w-100 ">
      <label>Date:</label>
      <div className='h-[50%] p-4 flex flex-col py-4 md:flex-row'>
        <label className='w-1/2 mr-2  py-2 font-bold' >From:  <input type="date" id="startDate" disabled={disableDatesBtn} min={dateNow} onChange={handleStartDate} /></label>
        <label className='w-1/2  mr-2  py-2 font-bold'>To:  <input type="date" id="endDate" disabled={disableDateTwo || disableDatesBtn} min={startDate} onChange={handleEndDate} /></label>
      </div>
      <label>Time:</label>
      <div className='h-[50%] p-4 flex flex-col md:flex-row'>
        <label className='w-1/2 mr-2  py-2 font-bold'>From:  <input type="time" id="startTime" disabled={disableDatesBtn} onChange={handleStartTime} /></label>
        <label className='w-1/2 mr-2  py-2 font-bold'>To:  <input type="time" id="endTime" disabled={disableTimeTwo || disableDatesBtn} onChange={handleEndTime} /> </label>
      </div>
      {errorMessage && <p className='error'>Select all date and time values (**Start date/time cannot be greater than end date/time)</p>}
      {!disableDatesBtn && <button type="button" className='btn btn-outline btn-accent w-[30%] ml-[30%] rounded-lg items-center' onClick={addDateTime}>Add Dates</button>}
      {disableDatesBtn && <button type="button" className='btn btn-outline btn-accent w-[30%] ml-[30%] rounded-lg items-center' onClick={editDateTime}>Edit Dates</button>}
    </div>

  );
}