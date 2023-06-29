import React from 'react'
import "../Css/About.css"
import profile from "../Images/profile.jpg"

function About() {
  return (
    <div className='About'>
      <div className='Heading'>
        About Me
      </div>
      <div className='AboutCont'>
        <div className='Prof'>
           <img src={profile} alt='pandeyyyy' />

        </div>
        <div className='Profcont'>
           <p>My Name is Saurabh Pandey. I am Ex-Kietian and present Magician.</p>
        </div>
      </div>

    </div>
  )
}

export default About