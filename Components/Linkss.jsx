import React from 'react'
import { Link } from "react-router-dom";
import "../Css/Link.css"

function Linkss() {
  return (
    <>
      <ul className='linklist'>
        <li className='linkss'>
        <Link to = '/AddCourse' style={{color:'black', textDecoration:'none'}}>Add Course</Link>
        </li>

        <li className='linkss'><Link to = '/Courses' style={{color:'black', textDecoration:'none'}}> Show All Courses</Link></li>
      </ul>
    </>
  )
}

export default Linkss