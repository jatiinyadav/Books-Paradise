import React, { useState, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import axios from "axios";
import logo from "./img/Book.svg";
import Searchform from "./searchform";
import Footer from "./footer";
import "../src/sass/style.css";

const BookDetails = () => {
  const [details, setDetails] = useState([]);

  const [term, setTerm] = useState("Ruskin Bond");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setIsLoading(true);
    const resources = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=11`
    );
    setDetails(resources.data.items);
    setIsLoading(false);
  }, [term]);

  return (
    <>
      <h2
        style={{
          textTransform: "capitalize",
          color: "#DB4437",
          fontFamily: "Michroma",
        }}
      >
        {term}
      </h2>
      <Searchform searchText={(text) => setTerm(text)}></Searchform>
      {isLoading ? (
        <h1
          className="loading-name"
          style={{
            background: "white",
            borderRadius: "1rem",
            color: "#DB4437",
            padding: "1rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            fontFamily: "Michroma",
            transform: "translate(-50%,-50%)",
            textTransform: "capitalize",
          }}
        >
          Fetching {term} books for you....
        </h1>
      ) : (
        <section>
          <section className="container" style={{ padding: "2rem 0rem" }}>
            {details.map((book) => {
              const {
                id,
                volumeInfo: {
                  title,
                  authors,
                  publisher,
                  previewLink,
                  imageLinks,
                },
              } = book;

              return (
                <section key={id} className="books-bg">
                  <div>
                    <div>
                      {imageLinks && (
                        <img
                          src={imageLinks.thumbnail}
                          width="100px"
                          alt="Book-cover"
                        />
                      )}
                    </div>
                    <div>
                      {title && (
                        <div>
                          <h3 className="inline">{title}</h3>
                        </div>
                      )}
                    </div>

                    <div>
                      {authors && (
                        <h4 style={{ paddingBottom: "1rem", color: "black" }}>
                          {" "}
                          Author:{" "}
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "#3B3B3B",
                            }}
                          >
                            {" "}
                            {authors}{" "}
                          </span>
                        </h4>
                      )}
                    </div>

                    <div>
                      {publisher && (
                        <h5 style={{ paddingBottom: "1rem", color: "black" }}>
                          {" "}
                          Published by:{" "}
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "#3B3B3B",
                            }}
                          >
                            {" "}
                            {publisher}{" "}
                          </span>
                        </h5>
                      )}
                    </div>

                    <div>
                      {previewLink && (
                        <h5
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            paddingBottom: "1rem",
                          }}
                        >
                          Read more :{" "}
                          <a
                            href={previewLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            Google Books <BiLinkExternal></BiLinkExternal>{" "}
                          </a>
                        </h5>
                      )}
                    </div>

                    {/* <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "1rem",
                      }}
                    > {language && }
                      <p>
                        {" "}
                        <span style={{ fontWeight: "bold", color: "black" }}>
                          {" "}
                          Language :{" "}
                        </span>{" "}
                        {language}{" "}
                      </p>
                      <p>
                        {" "}
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            marginLeft: "1rem",
                          }}
                        >
                          {" "}
                          Average Rating :{" "}
                        </span>{" "}
                        {averageRating}
                      </p>
                    </div> */}
                  </div>
                </section>
              );
            })}
            <div className="custom-card">
              <h3 style={{ fontSize: "1.32rem", color: "white" }}>
                Didn't find the book you love?
              </h3>
              <br />

              <img
                style={{ width: "100%" }}
                src={logo}
                alt="Books-Image"
                srcset=""
              />

              <h3 style={{ fontSize: "1.21rem", color: "white" }}>
                Search for your favourite{" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Genre{" "}
                </span>
                or {" "}
                <span style={{ fontWeight: "bold", color: "black" }}>

                  Author{" "}
                </span>
                in the search box!!
              </h3>
            </div>
          </section>
          <Footer></Footer>
        </section>
      )}
    </>
  );
};

export default BookDetails;
