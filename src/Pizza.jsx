// import React from "react";

const Pizza = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "200px", height: "200px", marginTop: "10px" }}
      />
    </div>
  );
};

export default Pizza;
