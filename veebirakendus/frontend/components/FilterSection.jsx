import React from "react";

const FilterSection = () => {
  
  return (
    <div>
    <section>
        <label for="Price">Price</label>
          <input className ="inputs-rounded" type="number" placeholder="Min"/>
          <input className ="inputs-rounded" type="number" placeholder="Max"/>
      </section>
      <section>
        <label for="Traveler">Traveler</label>
          <input  className ="inputs-rounded" type="number" placeholder=".."/>
      </section>

      {/* passengers section */}
      <section>
        Passengers:
        <div id="numbers">
          {/* by default */}
          1
        </div>
        <input type="button" onClick ="add()" value="+"/>
        <input type="button" onClick ="decrease()" value="-"/>      
        </section>

        <section>
        Vali eelistusi:
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
        <label for="vehicle2"> I have a car</label>
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
