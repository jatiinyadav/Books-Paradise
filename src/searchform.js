import React, { useState } from "react";

const Searchform = ({ searchText }) => {
  const [text, setText] = useState("");
  const [showValidTextModal, setShowValidTextModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "" || !text.trim()) {
      setShowValidTextModal(true);
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
            padding: "0.4rem",
            borderRadius: "0.2rem",
            cursor: "pointer",
          }}
          type="submit"
        >
          Search
        </button>
      </form>
      <div
        id="popup1"
        class={showValidTextModal ? "overlay modal-active" : "overlay"}
      >
        <div class="popup">
          <div class="close" onClick={() => setShowValidTextModal(false)}>
            &times;
          </div>
          <h3 class="content">Please Enter the valid text</h3>
        </div>
      </div>
    </div>
  );
};

export default Searchform;
