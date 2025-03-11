import React from "react";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import AirportsList from "./AirportsList";  



const SearchBar = () => {
  const [airports, setAirports] = useState([]);
  const [showAirportsList, setShowAirportsList] = useState(false);


  useEffect(() =>{
    const fetchAirports = async () => {
      try {
        const response = await fetch("/api/airports"); 
        const data = await response.json();
        console.log(data);
        setAirports(data);
      } catch (error) {
        console.error("ERROR_AIRPORTS_ARE_NOT_FOUND");
      }
    };
    fetchAirports();
  }, []);

  const toggleAirportsList = () => {
    setShowAirportsList(true);
    //console.log(airports);
  }

  //Chatgpt tegi seda:
  const handleBlur = (e) => {
    // Delay hiding the list to allow click events to register
    //to delay the execution 0f the code inside for focus and blur
    setTimeout(() => {
      if (!document.activeElement.closest('.card-container')) {
        setShowAirportsList(false);
      }
      //100 - milliseconds 
    }, 100);
  };

  // const searchAirports = (e)=>{
  //   //koodijupp w3 leheküljelt
  //   let input, filter, a, i;
  //   input = document.getElementById("search");
  //   filter = input.value.toLowerCase();
  //   //console.log(airports);

  // // Loop through all list items, and hide those who don't match the search query
  //   for (i = 0; i < airports.length; i++) {
  //     a = airports[i].name;
  //     //console.log(a);
  //     if (a) {
  //       a.style.display = "";
  //     } else {
  //       a.style.display = "Airports is not found..";
  //     }
  //   }
  // }

  return (
    <div className="card-container" onBlur={handleBlur}>
      <search>
          <label>From</label>
            <input type = "text" name="searchBar" id="search" placeholder="From" onFocus={toggleAirportsList} onBlur={handleBlur} />
            {/* onKeyUp={searchAirports} */}
          <label>To</label>
          <input type = "text" name="searchBar" id="search" placeholder="To" onFocus={toggleAirportsList } onBlur={handleBlur} />
      </search>   
    {showAirportsList && <AirportsList airports={airports} />};
  </div>
  );
};

export default SearchBar;
