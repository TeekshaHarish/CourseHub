import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const student = useSelector((state) => state.student);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mr-5" to="/">
          CourseHub
        </Link>
        {/* <a className="navbar-brand mr-5" href="#">
          CourseHub
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ml-auto">
            {/* <a className="nav-link active" aria-current="page" href="#">
              Home
            </a> */}
            <Link to="/courses" className="nav-link mx-2">
              All Courses
            </Link>
            <Link to="/user/dashboard" className="nav-link mx-2">
              Dashboard
            </Link>
            {/* <Link to="/user/dashboard" className="nav-link mx-2">
              Hello {student.name}
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
