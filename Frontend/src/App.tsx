import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginScreen from "./Pages/Login"
import RegisterScreen from "./Pages/Register"
import HomeLayout from "./Layouts/HomeLayout"
import TeacherHome from "./Pages/Teacher/TeacherHome"
import StudentHome from "./Pages/Student/StudentHome"
import UploadCourse from "./Pages/Teacher/UploadCourse"

const App = () => {


  return (
    <BrowserRouter>

      <Routes>
          <Route path="/login"  element={<LoginScreen/> } />
          <Route path="/register"  element={<RegisterScreen/> } />

          <Route path="/" element = {<HomeLayout/>}>
            <Route path="/teacherhome" element=  {<TeacherHome/>} />
            <Route path="/studenthome" element=  {<StudentHome/>} />
            <Route path="/uploadcourse" element=  {<UploadCourse/>} />
          </Route> 

      </Routes>
    
    </BrowserRouter>
  )
}

export default App