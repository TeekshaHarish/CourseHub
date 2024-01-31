import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markAsCompleted } from "../../redux/slices/student";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const student = useSelector((state) => state.student);

  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Course Marked As Complete!", {
      position: "top-right",
      autoClose: 3000, // Close the notification in 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const markAsCompletedHandler = (courseId) => {
    dispatch(markAsCompleted({ courseId }));
    notify();
  };

  return (
    <div>
      {student && (
        <>
          <div className="d-flex justify-content-center">
            <div className="container w-75 mx-auto">
              <h2 className="text-center my-4">DASHBOARD</h2>
              <div className="d-flex align-items-center profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="profile-svg"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
                <div className="profile-text">
                  <h4>{student.name}</h4>
                  <p style={{ fontSize: "1.2rem" }} className="text-muted">
                    {student.email}
                  </p>
                </div>
              </div>
              <div className="courses">
                <h4 className="mt-5 mb-3">Courses enrolled:</h4>
                {student.coursesEnrolled.map((course) => (
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
                            Instructor: {course.instructor}
                          </div>
                          <div className="card-text">{course.description}</div>
                          <div className="card-text">
                            Completed:{course.completed}
                          </div>
                          <p>
                            <b>Progress: </b>
                            <div
                              className="progress mb-3 mt-1"
                              role="progressbar"
                              aria-label="Example with label"
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar"
                                style={{ width: `${course.progress}%` }}
                              >
                                {course.progress}%
                              </div>
                            </div>
                            {course.completed === "No" && (
                              <button
                                className="btn btn-danger"
                                onClick={() =>
                                  markAsCompletedHandler(course.courseId)
                                }
                              >
                                Mark As Complete
                              </button>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentDashboard;
