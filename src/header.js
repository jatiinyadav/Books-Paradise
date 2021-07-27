import React from "react";
import "./style.css";

const Header = () => {
  return (
    <>
      <div>
        <a
          className="github-icon"
          href="https://github.com/jatiinyadav/Books-App-using-ReactJs"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icon"
            style={{
              position: "absolute",
              right: "10px",
              height: "2rem",
              width: "2rem",
              padding: "3px",
              marginTop: "1.25rem",
              background: "white",
              cursor: "pointer",
            }}
            src="https://img.icons8.com/material-sharp/30/000000/github.png"
            alt="github-icon"
          />
        </a>
        <h2
          className="heading-name"
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
            fontFamily: "Michroma",
          }}
        >
          A Book Library for all Book Lovers.
        </h2>
      </div>
    </>
  );
};

export default Header;
