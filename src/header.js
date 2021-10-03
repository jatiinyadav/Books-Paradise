import React from "react";

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
              height: "2.5rem",
              width: "2.5rem",
              padding: "3px",
              marginTop: "1.25rem",
              background: "white",
              cursor: "pointer",
            }}
            src="https://img.icons8.com/material-sharp/30/000000/github.png"
            alt="github-icon"
          />
        </a>
        <strong>
          <h2
            className="heading-name"
            style={{
              background: "#ffffffc7",
              borderRadius: "1rem",
              padding: "1rem",
              paddingTop: 0,
              marginTop: 20,
              marginBottom: 50,
              color: "#333333",
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Scheherazade New",
            }}
          >
            A Book Library for all Book Lovers
          </h2>
        </strong>
      </div>
    </>
  );
};

export default Header;
