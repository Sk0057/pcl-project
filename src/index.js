import React from "react";
import ReactDOM from "react-dom";
import "./fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./Main/Main";
import About from "./About/About";
import HowItWorks from "./HowItWorks/HowItWorks";

/* 
List of packages installed additionally here:-
create-react-app
aos
react-router-dom
react-calendar
moment

and at backend:-
VaderSentiment
pandas
langdetect
matplotlib
seaborn
*/

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/About" element={<About />} />
      <Route path="/HowItWorks" element={<HowItWorks />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
