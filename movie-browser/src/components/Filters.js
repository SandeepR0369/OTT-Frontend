import React from "react";
import { TextField, Button } from "@mui/material";

const Filters = ({ onFilter }) => {
  const [filter, setFilter] = React.useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const applyFilter = () => {
    onFilter(filter);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <TextField
        label="Search by Title"
        variant="outlined"
        value={filter}
        onChange={handleFilterChange}
        style={{ marginRight: "10px" }}
      />
      <Button variant="contained" color="primary" onClick={applyFilter}>
        Apply
      </Button>
    </div>
  );
};

export default Filters;
