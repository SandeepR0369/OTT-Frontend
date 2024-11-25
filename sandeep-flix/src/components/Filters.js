import React, { useState } from "react";

const Filters = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const applyFilter = () => {
    onFilter(searchTerm);
  };

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search by title, genre, or language..."
        value={searchTerm}
        onChange={handleFilterChange}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "300px",
          marginRight: "10px",
        }}
      />
      <button
        onClick={applyFilter}
        style={{
          padding: "10px 20px",
          backgroundColor: "#e50914",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filters;
