import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { applyCourse } from "../../redux/slices/student";
import "./CourseDetails.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [course, setCourse] = useState();
  const student = useSelector((state) => state.student);
  const getCourseDetails = async () => {
    try {
      const res = await axios.post("/course/getCourseDetails", {
        courseId: params.id,
      });
      setCourse(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCourseDetails();
  }, []);

  const AddStudent = async (courseId) => {
    try {
      const res = await axios.post(
        "/course/addStudent",
        {
          courseId,
          studentId: student._id,
        },
        // {
        //   courseId,
        //   id: student._id,
        //   name: student.name,
        //   email: student.email,
        // },
        {}
      );
    } catch (error) {
      console.log(error);
    }
  };
  const notify = () => {
    toast.success("Enrolled in course!", {
      position: "top-right",
      autoClose: 3000, // Close the notification in 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const HandleApply = () => {
    AddStudent(course._id);
    dispatch(
      applyCourse({
        courseId: course._id,
        name: course.name,
        instructor: course.instructor,
        thumbnail: course.thumbnail,
        completed: "No",
        progress: 0,
      })
    );
    notify();
    navigate("/courses");
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      {course && (
        <div className="container mt-5 details mx-auto">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={course.thumbnail}
              alt={course.name}
              className="course-img"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-center mb-5">{course.name}</h2>
            <div className="row">
              <div className="col-md-7">
                <h4>
                  Instructor:
                  {course.instructor}
                </h4>
                <p className="course-desc">
                  <b>Description: </b> <br />
                  {course.description}
                </p>
                <p className="course-desc">
                  <b>EnrollmentStatus: </b>
                  {course.enrollmentStatus}
                </p>
                <p className="course-desc">
                  <b>Duration: </b>
                  {course.duration}
                </p>
                <p className="course-desc">
                  <b>Schedule: </b>
                  {course.schedule}
                </p>
                <p className="course-desc">
                  <b>Location: </b>
                  {course.location}
                </p>
                <h5 className="my-2-3">
                  <b>Prerequisites: </b>
                </h5>
                <div className="d-flex mb-3 prereq">
                  {course.prerequisites.map((skill) => (
                    <div className="skill px-3 py-2 m-3 text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-5">
                <h5>
                  <b>Syllabus: </b>
                </h5>
                {/* <div className="d-flex flex-column">
                  {course.syllabus.map((weekSyllabus) => (
                    <div className="card my-2">
                      <div className="card-body">
                        <h5>Week :{weekSyllabus.week}</h5>
                        <p className="course-desc">{weekSyllabus.topic}</p>
                        <p>{weekSyllabus.content}</p>
                      </div>
                    </div>
                  ))}
                </div> */}
                <div className="accordion" id="accordionExample">
                  {course.syllabus.map((weekSyllabus) => (
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id={`headingOne${weekSyllabus.week}`}
                      >
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${weekSyllabus.week}`}
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Week {weekSyllabus.week} : {weekSyllabus.topic}
                        </button>
                      </h2>
                      <div
                        id={`collapse${weekSyllabus.week}`}
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                      >
                        <div className="accordion-body">
                          {weekSyllabus.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                onClick={HandleApply}
                className="btn btn-success btn-lg w-50 my-4 mb-5"
              >
                Apply For This Course
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
