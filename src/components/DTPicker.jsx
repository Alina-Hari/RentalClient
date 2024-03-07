import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css'
export default function DTPicker(){


      const [DTStartvalue, setDTStartvalue] = useState(new Date());
      const [DTEndvalue, setDTEndvalue] = useState(new Date());
      const [range, setRange] = useState([]);
      const newDate = range;
      const dateToday = new Date(Date.now());
      const  [disableDTPickerTwo, setDisableDTPickerTwo] = useState(true);
      
      const DTStartonChange = (stat) => {
        setDTStartvalue(stat);
        setDisableDTPickerTwo(false);
        // console.log('date time select value' + stat);
      };
      const DTEndonChange = (stat) => {
        setDTEndvalue(stat);
        // console.log('date time select value' + stat);
      };
    
      function addDate() {    
        newDate.push({ start: DTStartvalue, end: DTEndvalue });
        setRange(newDate);
        console.log(range)
      }
    
      return (
        <div className="flex flex-row justify-start flex-wrap w-100 gap-16">
          <div className='w-100'>
            <DateTimePicker labels = {  [{textColor : '#e1528f'}]} 
            minDate={dateToday} onChange={DTStartonChange} value={DTStartvalue} />          
          </div> 
          <div  className='w-100'>
          <DateTimePicker disabled={disableDTPickerTwo} minDate={DTStartvalue} onChange={DTEndonChange}  value={DTEndvalue} />     
          </div>
          <button onClick={addDate}>Add</button>
        </div>
        
      );
    }