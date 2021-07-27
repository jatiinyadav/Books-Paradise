import React, { useState, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import axios from "axios";
import logo from "./books-image.svg";
import Searchform from "./searchform";
import Footer from "./footer";
import "./style.css";

const BookDetails = () => {
  const [details, setDetails] = useState([]);

  const [term, setTerm] = useState("Harry Potter");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const resources = await axios.get(
      // `https://api.nytimes.com/svc/books/v3/lists/current/${term}.json?api-key=Q4uIicaYPeZUVesmoxUGkxEmb0xm9n7r`
      // `https://api.nytimes.com/svc/books/v3/lists/best-sellers/${term}.json?api-key=Q4uIicaYPeZUVesmoxUGkxEmb0xm9n7r`
      `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=11&startIndex=2`
      // `https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyB5xfYcsknuZGuVKTNfM2wl2U2cVOhOpiw&maxResult=14`
    );
    setDetails(resources.data.items);
    setIsLoading(false);
  }, [term]);

  return (
    <>
      <h2
        style={{
          textTransform: "capitalize",
          color: "crimson",
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
            color: "crimson",
            padding: "1rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            fontFamily: "Michroma",
            transform: "translate(-50%,-50%)",
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
                  industryIdentifiers,
                  pageCount,
                  averageRating,
                  language,
                  previewLink,
                  imageLinks: { thumbnail },
                },
                saleInfo: { country },
              } = book;

              return (
                <article key={id} className="books-bg">
                  <img src={thumbnail} alt="Book-img" />

                  <h3>{title}</h3>

                  <h4 style={{ paddingBottom: "1rem" }}>
                    {" "}
                    By:{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "crimson",
                      }}
                    >
                      {" "}
                      {authors}{" "}
                    </span>
                  </h4>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      paddingBottom: "1rem",
                    }}
                  >
                    Preview Here :{" "}
                    <a href={previewLink}>
                      {" "}
                      Google Books <BiLinkExternal></BiLinkExternal>{" "}
                    </a>
                  </p>

                  {industryIdentifiers.map((props) => {
                    const { type, identifier } = props;

                    return (
                      <div>
                        <ul>
                          <li>
                            <span
                              style={{ fontWeight: "bold", color: "black" }}
                            >
                              Type:{" "}
                            </span>{" "}
                            {type} {" &  "}
                            <span
                              style={{ fontWeight: "bold", color: "black" }}
                            >
                              {" "}
                              Identifier:{" "}
                            </span>{" "}
                            {identifier}
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <p>
                      {" "}
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        {" "}
                        Page Count :{" "}
                      </span>{" "}
                      {pageCount}
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
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
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
                        Sale Country :{" "}
                      </span>{" "}
                      {country}{" "}
                    </p>
                  </div>
                </article>
              );
            })}
            <div className="custom-card">
              <h2>Didn't found the book you love?</h2>
              <br />

              <img
                style={{ width: "100%" }}
                src={logo}
                alt="Books-Image"
                srcset=""
              />

              <h2 style={{ fontSize: "1.4rem" }}>
                Search for your favourite{" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  Genre{" "}
                </span>{" "}
                or{" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  Author{" "}
                </span>{" "}
                in the search box!!
              </h2>
            </div>
          </section>
          <Footer></Footer>
        </section>
      )}
    </>
  );
};

export default BookDetails;
