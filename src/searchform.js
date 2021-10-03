import React, { useState } from "react";

const Searchform = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "" || !text.trim()) {
      alert("Please Enter the valid text");
      return;
    }
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
          placeholder="Search books and authors..."
          onChange={(e) => setText(e.target.value)}
        />
        <button
          style={{
            marginLeft: "1rem",

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
