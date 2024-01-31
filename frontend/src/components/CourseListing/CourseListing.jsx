import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CourseListing.css";

const CourseListing = () => {
  const student = useSelector((state) => state.student);
  const [courses, setCourses] = useState();
  const getAllCourses = async () => {
    try {
      const res = await axios.get("/course/getAllCourses", {});
      //res.data.data for inside data
      //add proxy
      setCourses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCourses({});
  }, []);

  const filterCourses = async (filter) => {
    try {
      const res = await axios.post("/course/filterCourses", { filter }, {});
      //res.data.data for inside data
      //add proxy
      setCourses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [name, setName] = useState("");
  const [instructor, setInstructor] = useState();

  const filterHandler = (event) => {
    event.preventDefault();
    filterCourses({ name, instructor });
  };
  return (
    <>
      <h2 className="text-center mt-4 ">All Courses</h2>
      <div className="d-flex justify-content-center align-items-center mt-4 mb-3 filter-form">
        <form onSubmit={filterHandler}>
          <label className="mx-3">
            Course Name: &nbsp;
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="mx-3">
            Instructor: &nbsp;
            <input
              type="text"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
            />
          </label>
          <button type="submit" className="btn btn-success mx-3">
            Search
          </button>
        </form>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        {courses &&
          courses.map((course) => (
            <div className="card my-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-center align-items-center ">
                    <img
                      src={course.thumbnail}
                      alt={course.name}
                      className="card-image"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="card-title">{course.name}</h5>
                    <div className="card-subtitle mb-2 text-body-secondary">
                      {course.instructor}
                    </div>
                    <div className="card-text">{course.description}</div>
                    <div className="card-text mb-3">
                      <b>Enrollment Status:</b> {course.enrollmentStatus}
                    </div>
                    <Link to={`/course/${course._id}`}>
                      <button className="btn btn-info w-30">See Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* <h4>Length: {student && student.coursesEnrolled.length}</h4> */}
    </>
  );
};

export default CourseListing;
