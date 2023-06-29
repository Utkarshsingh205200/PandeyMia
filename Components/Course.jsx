import React  from "react";
import "../Css/Course.css";

function Course(props) {

  return (
    <div className="Coursedisp">
      <div className="textcourse">
        <h3>{props.name}</h3>
        <h5>{props.instructor}</h5>
        <p>{props.duration}</p>
        <p><span style={{fontWeight:"bolder"}}>Price is : </span>{props.price}</p>
      </div>
      <div className="coursebut">
        <button type="button" class="btn btn-warning">
          Update
        </button>
        <button type="button" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Course;
