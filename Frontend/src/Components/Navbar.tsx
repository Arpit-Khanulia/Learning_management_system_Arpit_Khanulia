import { Link,Navigate } from "react-router-dom";
import { useAppSelector } from "../Store/Hooks";


const handlelogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    <Navigate to='/login' />
  };

  
const Navbar = () => {
  const role = useAppSelector(state=>state.saveUserAndToken.user.role)
  console.log('this is my role',  role);
  
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/uploadcourse" >Upload Course</Link></li>
        <li><Link to="/teacherhome">My Courses</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Remote Classroom</a>
  </div>
  <div className="navbar-center hidden lg:flex">
  { role === 'teacher' && (
    <ul className="menu menu-horizontal px-1">
        <li><Link to="/teacherhome">My Courses</Link></li>
        <li><Link to="/uploadcourse">Upload Course</Link></li>
    </ul>
)}

{ role === 'student' && (
    <ul className="menu menu-horizontal px-1">
        <li><Link to="/allcourses">All Courses</Link></li>
        <li><Link to="/purchasedcourse">Purchased Courses</Link></li>
    </ul>
)}
  </div>
  <div className="navbar-end">
    <Link to="/login" onClick={handlelogout} className="btn btn-sm">Log Out</Link>
  </div>
</div>
  )
}

export default Navbar
