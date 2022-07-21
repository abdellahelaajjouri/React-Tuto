import React from "react";
import "../App.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.avatar} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.job}</p>
        <input type="text" value={props.name} onChange={props.onChangeName} />
        <button className="button button-red" onClick={props.onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
