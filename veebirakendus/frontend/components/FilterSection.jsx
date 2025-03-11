import React from "react";
import { useState } from "react";



const FilterSection = () => {
  const [passengers, setPassengers] = useState(1);

  
  function add(){
    setPassengers(passengers + 1);
  }
  
  function decrease(){
    if (passengers > 1) {
      setPassengers(passengers - 1);
    }
  }
  return (
    <div>
    <section>
        <label for="Price">Price</label>
          <input className ="inputs-rounded" type="number" placeholder="Min"/>
          <input className ="inputs-rounded" type="number" placeholder="Max"/>
      </section>
      {/* <section>
        <label for="Traveler">Traveler</label>
          <input  className ="inputs-rounded" type="number" placeholder=".."/>
      </section> */}

      {/* passengers section */}
      <section>
        Passengers:
        <div id="numbers">
          {/* by default is 1 */}
          {passengers}
        </div>
        <input type="button" onClick ={add} value="+"/>
        <input type="button" onClick ={decrease} value="-"/>      
        </section>

        <section>
        Choose preferences:
        <input type="checkbox" id="windowSeat" name="windowSeat" />
        <label for="windowSeat"> Window seat</label>
        <input type="checkbox" id="spaceForLegs" name="spaceForLegs" />
        <label for="spaceForLegs"> More space for legs</label>
        <input type="checkbox" id="closeToTheExit" name="closeToTheExit"/>
        <label for="closeToTheExit"> Close to the exit</label>
        <input type="checkbox" id="pairSeats" name="pairSeats"/>
        <label for="pairSeats"> Pair seats</label>
      </section>
      <section>
        Cabin class:
        <select>
          {/* default is economy */}
          <option>Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </select>
      </section>
      </div>
  );
};

export default FilterSection;
