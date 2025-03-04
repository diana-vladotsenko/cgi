import { useState, useEffect } from "react";
import flightsData from "../src/flights.json"; 

export default function FlightComponent({ id }) {
  const [loading, setLoading] = useState(true);
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (id) {
      const foundFlight = flightsData.find((item) => item.id === parseInt(id));
      if (foundFlight) {
        setFlight(foundFlight);
        setLoading(false);
      } else {
        console.error("ERROR_FLIGHT_IS_NOT_FOUND");
        setLoading(false);
      }
    }
  }, [id]); 

  return (
    <div>
      {loading ? (
        <div id="notice">Loading flights...</div>
      ) : flight ? (
        <div className="flights-card">
          <p className="card-container"><strong>Number:</strong> {flight.flightNumber}</p>
          <p className="card-container"><strong>Departure:</strong> {flight.departure}</p>
          <p className="card-container"><strong>Arrival:</strong> {flight.arrival}</p>
          <p className="card-container"><strong>Departure time:</strong> {flight.departureTime}</p>
          <p className="card-container"><strong>Arrival Time:</strong> {flight.arrivalTime}</p>
          <p className="card-container"><strong>Price (per ticket):</strong> {flight.price}</p>
          <p className="card-container"><strong>Company:</strong> {flight.airline}</p>
        </div>
      ) : (
        <div>No flights found.</div>
      )}
    </div>
  );
}
