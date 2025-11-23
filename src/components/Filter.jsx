import React from "react";

function Filter({ value, onChange }) {
  return (
    <div>
      <label>
        Find contacts: <br />
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}

export default Filter;
