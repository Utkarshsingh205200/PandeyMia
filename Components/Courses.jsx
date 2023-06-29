import React from 'react';
import "../Css/Course.css";
import Course from "./Course";
import { useState, useEffect } from "react";

function Courses() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://pandeymia-default-rtdb.firebaseio.com/Courses.json').then();
      const responseData = await response.json();

      const loadedCourse = [];

      for (const key in responseData) {
        if (key === '0')
          continue;
        loadedCourse.push({
          id: key,
          name: responseData[key].name,
          instruct: responseData[key].instruct,
          price: responseData[key].price,
          duration: responseData[key].time
        });
      }
      setCourse(loadedCourse);
    };

    fetchMeals();
  }, []);


  return (
    <div className='container text-align-center coursecont'>
      <h1 className='courseheading'>Courses</h1>
      <div className='Coursename'>
        {course.map((cour) => (
          <Course
            key={cour.id}
            name={cour.name}
            instructor={cour.instruct}
            price={cour.price}
            duration={cour.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
