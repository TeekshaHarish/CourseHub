// Home.js
import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="text-center">
        <h1 className="title">Your App Name</h1>
        <p className="subtitle">Learn and Grow with Us</p>
        <a href="/courses">
          <Button variant="success" size="lg">
            Get Started
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
