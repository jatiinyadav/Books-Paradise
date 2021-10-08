import React from "react";
import "./sass/ribbon.css"
const Header = () => {
  return (
    <>
      <div class="ribbon">
        <a
          className="github-icon"
          href="https://github.com/jatiinyadav/Books-App-using-ReactJs"
          target="_blank"
          rel="noreferrer"
        >
          <span>GITHUB</span>
        </a>
      </div>
      <div>
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
              textShadow: "2px 2px 3px #b0b0b0"
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
