/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import FlightList from "./FlightsList";  
import SearchBar from "./SearchBar";  
import ChooseDate from "./DatePicker";  
import FilterSection from "./FilterSection";  


import { useState, useEffect } from "react";



const flightsData = () => {
  //flights - empty array
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        //fetch is a method HTTP of get throught url
        const response = await fetch("/api/flights"); 
        //Ответ преобразуется из формата JSON в JavaScript-объект
        const data = await response.json();
        //console.log(data);
        //saving flights
        setFlights(data);
        setLoading(false);
      } catch (error) {
        console.error("ERROR_FLIGHTS_ARE_NOT_FOUND");
        setLoading(false);

      }
    };
    // Calling a function to render a data, after first rendering
    fetchFlights();
    //Empty array says, that dont need to call this function again, so call it once
  }, []);
  

  return (
    <div className="flights-page">
      <p>
        <Link href="mailto:example@gmail.com">
          example@gmail.com
        </Link>
      </p>
      <h1>Book A Flight!</h1>

      {/* filter */}
      <section className="filter">
          <select >
            <option >Price (Lowest to highest)</option>
            <option>Price (Highest to lowest)</option>
          </select>
        </section>

        {/* kasutaja filterite võimaluse osa */}
        <form method="submit">
        <SearchBar/>
        <ChooseDate/>
        <FilterSection/>
        <input type="submit" name="submit" value="Find" className="primary-button"/>
      </form>

      {/* lennureiside ajad */}
      <section>
          <FlightList flights={flights} />
        </section>
    </div>
  );
};

export default flightsData;
