import './App.css';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CourseListing from './components/CourseListing/CourseListing';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import Navbar from './components/Navbar/Navbar';


function App() {
  return( 
  <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<CourseListing/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/user/dashboard' element={<StudentDashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
