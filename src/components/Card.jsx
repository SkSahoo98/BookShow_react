import React from "react";
import "./card.css";

export default function Card({ item, index }) {
  return (
    <div className="card" style={{ width: "18rem" }} key={index}>
      
      <div className="card-body">

        <h5 className="card-title">{item.show.name}</h5>
        <p className="card-text">{item.show.language}</p>
        
        <a href={`/show/${item.show.id}`}>
          <button>Details</button>
        </a>
      </div>

    </div>
  );
}
