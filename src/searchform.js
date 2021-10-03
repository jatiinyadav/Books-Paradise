import React, { useState } from "react";
import style from './sass/modal.module.scss'

const Searchform = ({ searchText }) => {
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !text.trim()) {
      setIsModalOpen(true)
      return;
    }
    searchText(text);
  };

  return (
    <div>
      <div className={isModalOpen ? style.modalContainer : style.hiddenContainer}>
        <div className={style.modal}>
          <button className={style.closeModal} onClick={() => setIsModalOpen(false)} >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc3232"  class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fc3232" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
              <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
          </svg>
          <span>Please, enter a valid text.</span>
        </div>
      </div>


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
