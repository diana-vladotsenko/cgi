/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import FlightComponent from "../components/FlightComponent";  
// flightsData from "../flights.json";  
import { useState, useEffect } from "react";


const ContactInfo = () => {
  const [flight, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("/api/flights"); 
        const data = await response.json();
        setFlights(data);
        setLoading(false);
      } catch (error) {
        console.error("ERROR_FLIGHTS_ARE_NOT_FOUND");
        setLoading(false);

      }
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <p>
        <Link href="mailto:example@gmail.com">
          example@gmail.com
        </Link>
      </p>
      <h1>Planeeri lendu!</h1>

      {/* Lennude leidmise section */}
      <h2>Lennuinfo</h2>
      <section >
        <search>
          <form method="submit">
            <input name="searchBar" id="search" placeholder="Leia lendu.."/>
            <input type="submit" name="submit" value="Otsi"/>
          </form>
        </search>
        <FlightComponent flights={flight} />
      </section>

      {/* Firmade leidmine */}
      <form method="submit">
      <section>
      <label for="Firma">Vali Firma </label>
      <select>
          <option> Airbaltic</option>
          <option> Ryanair</option>
          <option> SAS </option>
          <option> Finlandia</option>
        </select>
        </section>

        <section>
        <label for="Kuupäev">Vali Kuupäev</label>
        <input type="date" id="flightDate" name="date"/>
        <input type="submit"></input>
        </section>
        
        {/* sihtkoht, lõppkoht */}
        {/* <section>
          <select>
          <option> New York</option>
          <option> London</option>
          <option> Dubai </option>
          <option> Madrid</option>
          </select>
        </section> */}

        <section>
        Vali sihtkoht: <input type="text" placeholder="Sisesta sihtkoht ..."/>
        </section>
        <section>
        Vali lõppkoht: <input type="text" placeholder="Sisesta lõppkoht ..."/>
        </section>

        <h2>Sisesta andmed:</h2>
        <section>
        Sisesta eesnimi: <input type="text" placeholder="Sisesta lõppkoht ..."/>
        </section>
        <section>
        Sisesta perekonnanimi: <input type="text" placeholder="Sisesta lõppkoht ..."/>
        </section>
        <section>
        Vali istekoht: 
        <select>
          <option> A</option>
          <option> B</option>
          <option> C </option>
          <option> F</option>
        </select>
        </section>
        <section>
        Vali eelistusi:
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
          <label for="vehicle2"> I have a car</label>
        </section>

      </form>
    </div>
  );
};

export default ContactInfo;
