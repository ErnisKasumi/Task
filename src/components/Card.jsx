// Card.js
import React from "react";

const Card = ({ version, date, status, author, description, bgColor }) => {
  const statusStyles = {
    backgroundColor: bgColor,
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        width: "300px",
      }}
    >
      <h3>
        {version} ({date})
      </h3>
      <div style={statusStyles}>{status}</div>
      <p>Author: {author}</p>
      <p>{description}</p>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Download
      </button>
    </div>
  );
};

export default Card;
