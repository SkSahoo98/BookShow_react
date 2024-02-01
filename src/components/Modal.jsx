import React, { useState } from "react";
import "./modal.css";

// ... (your existing imports)

export default function Modal({ isOpen, onClose, movie }) {
  const [formData, setFormData] = useState({
    customer_name: "",
    movie: "",
    numberOfTickets: 1, // Default to 1 ticket
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTicketChange = (e) => {
    const numberOfTickets = parseInt(e.target.value, 10);
    setFormData((prevState) => ({
      ...prevState,
      numberOfTickets: isNaN(numberOfTickets) ? 0 : numberOfTickets,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      movie: movie.name,
    }));

    const data = {
      customer_name: formData.customer_name,
      movie: movie.name,
      numberOfTickets: formData.numberOfTickets,
    };
    alert("Ticket Booked");

    // Pushing into local storage array
    let arr = JSON.parse(localStorage.getItem("tickets")) || [];
    arr.push(data);
    localStorage.setItem("tickets", JSON.stringify(arr));

    console.log("formData", data);
    setFormData({
      customer_name: "",
      movie: "",
      numberOfTickets: 1,
    });

    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        <div className="box">
          <form onSubmit={handleSubmit}>
            <label style={{ color: "white" }}>Movie Name </label>
            <input
              type="text"
              name="movie_name"
              disabled={true}
              value={movie.name}
            />
            <br />
            <label>Your Name &nbsp; &nbsp;</label>
            <input
              type="text"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              required
            />
            <br />
            <label>No.of Tickets &nbsp;</label>
            <input
              type="number"
              name="numberOfTickets"
              value={formData.numberOfTickets}
              onChange={handleTicketChange}
            />
            <br />
            <br />
            <button type="submit">Book</button>
          </form>
        </div>
      </div>
    </div>
  );
}

