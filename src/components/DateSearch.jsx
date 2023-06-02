import React from "react";

function DateSearch({ changeMinDate, changeMaxDate, minDate, maxDate }) {
  return (
    <div>
      <div>
        <label for="minDate">Minimum date:&nbsp; </label>
        <input
          type="date"
          name="minDate"
          value={minDate}
          onChange={(event) => changeMinDate(event.target.value)}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <label for="maxDate">Maximum date: </label>
        <input
          type="date"
          name="maxDate"
          value={maxDate}
          onChange={(event) => changeMaxDate(event.target.value)}
        />
      </div>
    </div>
  );
}

export default DateSearch;
