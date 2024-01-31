// Home.js
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="text-center">
        <h1 className="title">CourseHub</h1>
        <p className="subtitle">
          Ignite Your Learning Journey, One Course at a Time!
        </p>
        <a href="/courses">
          <button className="btn btn-info btn-lg">Get Started</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
