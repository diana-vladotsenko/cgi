import { useState, useEffect } from "react";

export default function FlightComponent({ flights}) {
  const [flight, setFlight]= useState([]);
  return (
    <div>
        <div>
          {flight.length > 0 ? (
            flight.map((flight) => (
              <div key={flight.id}>
                <p><strong>Name:</strong> {flight.flightNumber}</p>
                <p><strong>Departure:</strong> {flight.departure}</p>
                <p><strong>Arrival:</strong> {flight.arrival}</p>
                <p><strong>Departure Time:</strong> {flight.departureTime}</p>
                <p><strong>Arrival Time:</strong> {flight.arrivalTime}</p>
                <p><strong>Price (per ticket):</strong> {flight.price}</p>
                <p><strong>Company:</strong> {flight.airline}</p>
              </div>
            ))
          ) : (
            <p>No flights available</p>
          )}
        </div>
    </div>
  );
}