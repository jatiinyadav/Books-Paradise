import React, { useState } from "react";
import "./style.css";

const Searchform = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <br />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search Chetan Bhagat, Vikram Seth etc.."
          onChange={(e) => setText(e.target.value)}
        />
        <button
          style={{
            marginLeft: "1rem",
            padding: "0.4rem",
            borderRadius: "0.2rem",
            cursor: "pointer",
          }}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchform;
