import React from "react";

//  TODO:   remove dependence on sma and title
//
const Dropdown = props => {
  const { label, data, onChange } = props;
  return (
    <div className="row">
      <label className="col-md-1" htmlFor={label}>
        {label}
      </label>
      <select
        id={label}
        className="form-control form-control-sm col-sm-3"
        onChange={e => onChange(e.target.value)}
      >
        {data.map(sma => (
          <option key={sma.id}>{sma.title}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
