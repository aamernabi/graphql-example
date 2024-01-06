import React from "react";

const Card = ({ children }) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: "10px",
      margin: "10px",
      borderRadius: "5px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }}
  >
    {children}
  </div>
);

export default Card;
