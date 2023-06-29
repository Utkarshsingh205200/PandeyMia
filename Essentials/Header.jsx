import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Google from "../Components/Google"

function Header() {
  return (
    <>
      <div className='container-fluid Headers'>
        <div className='container Head'>  
          <p className='CourseName'><Link to = '/' style={{color:'black', textDecoration:'none'}}>PandeyMia</Link></p>     
          <ul className='ulLis'>
             <li><Link to = '/Courses' style={{color:'black', textDecoration:'none'}}>Courses</Link></li>
             <li><Link to = '/AddCourse' style={{color:'black', textDecoration:'none'}}>Add Course</Link></li>
             <li><Link to = '/About' style={{color:'black', textDecoration:'none'}}>About</Link></li>
             <li><Link to = '/Contact' style={{color:'black', textDecoration:'none'}}>Contact</Link></li>
             <li><Link to = '/Register' style={{color:'black', textDecoration:'none'}}>Register</Link></li>
          </ul>
          <div className='goog'>
          <Google/>
          </div>
          
          </div>
      </div>
    </>
  )
}

export default Header