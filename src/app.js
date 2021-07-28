import React from "react";
import Books from "./books";
import Header from "./header";
import ScrollToTop from "./scrolltotop";
import "./style.css";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Books></Books>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default App;
