import React from "react";

const Header = () => {
  return (
    <>
      <div>
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
        </div>
        <strong>
          <h2
            className="heading-name"
            style={{
              background: "none",
              // borderRadius: "1rem",
              padding: "1rem",
              paddingTop: 0,
              marginTop: 20,
              marginBottom: 50,
              color: "#333",
              textAlign: "center",
              // fontWeight: "bold", //No need of bold because headings are itself bold
              fontFamily: "Scheherazade New",
              textShadow: "2px 2px 3px #b0b0b0",
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
