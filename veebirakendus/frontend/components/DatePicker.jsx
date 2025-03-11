import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";


const ChooseDate = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);


  
  return (
    
    <section style={{justifyContent: "center"}}>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            minDate={new Date()} 
            dateFormat="dd/MM/yyyy"
            placeholderText="Departure date"
            selectsStart
            startDate={departureDate}
            endDate={returnDate}
          />
          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            placeholderText="Return date"
            selectsStart
            startDate={departureDate}
            endDate={returnDate}
          />
          </section>
  );
};

export default ChooseDate;
