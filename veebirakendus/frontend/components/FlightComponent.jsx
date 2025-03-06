export default function FlightComponent({ flights }) {
  return (
    <div >
      {flights.length > 0 ? (
        flights.map((flight) => (
          <div key={flight.id} className="flights-card">
            <p>Destination: {flight.destination}</p>
            <p>Date: {flight.date}</p>
            <p>Departure Time: {flight.departureTime}</p>
            <p>Arrival Time: {flight.arrivalTime}</p>
            <p>FlightTime : {flight.flightTime}</p>
            <p>Price (per ticket): {flight.price}</p>
            <button className="primary-button">Choose </button>
          </div>
        ))
      ) : (
        <p>No flights available</p>
      )}
    </div>
  );
}
