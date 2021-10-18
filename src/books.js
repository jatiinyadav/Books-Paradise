import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./img/Book.svg";
import Searchform from "./searchform";
import Footer from "./footer";
import Book from "./book";
import LoadingCard from "./loadingCard";

const BookDetails = () => {
  const [details, setDetails] = useState([]);

  const [term, setTerm] = useState("Ruskin Bond");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const resources = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=11`
      );
      setDetails(resources.data.items);
      setIsLoading(false);
    };
    fetchDetails();
  }, [term]);

  const loadMore = async () => {
    const resources = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=8&startIndex=${details.length}`
    );
    setDetails((oldDetails) => [...oldDetails, ...resources.data.items]);
  };

  return (
    <>
      <h2
        style={{
          textTransform: "capitalize",
          color: "#DB4437",
          fontSize: 40,
          marginTop: -60,
          marginBottom: -21,
          fontFamily: "Scheherazade New",
        }}
      >
        {term}
      </h2>
      <Searchform searchText={(text) => setTerm(text)}></Searchform>
      {isLoading ? (
        <section className="container" style={{ padding: "2rem 0rem" }}>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </section>
      ) : !details ? (
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
            fontSize: 33,
            fontFamily: "Inria Serif",
            transform: "translate(-50%,-50%)",
            textTransform: "capitalize",
          }}
        >
          😞 Couldn't find books about {term}
        </h1>
      ) : (
        <section>
          <section className="container" style={{ padding: "2rem 0rem" }}>
            {details.map((book, index) => (
              <Book {...book} key={index} />
            ))}
            <div className="custom-card">
              <h3 style={{ fontSize: "1.32rem", color: "white" }}>
                Didn't find the book you love?
              </h3>
              <br />

              <img
                style={{ width: "100%" }}
                src={logo}
                alt="A man reading a book"
                srcset=""
              />

              <h3 style={{ fontSize: "1.21rem", color: "white" }}>
                Search for your favourite{" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Genre{" "}
                </span>
                or{" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Author{" "}
                </span>
                in the search box!!
              </h3>
            </div>
          </section>
          <div className="load-more">
            <button onClick={() => loadMore()}>Load More!</button>
          </div>
          <Footer></Footer>
        </section>
      )}
    </>
  );
};

export default BookDetails;
