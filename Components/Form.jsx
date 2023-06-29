import React, { useEffect, useState } from "react";
import "../Css/AddCourse.css";

function Form() {
  const [submit,setSubmit] = useState(false);

  const [data, setData] = useState({
    name: "",
    instruct: "",
    time: "",
    price: "",
  });


  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  

  const handleChanges = (event,property) =>{
    setData({ ...data, [property]: event.target.value });
  }

  const onSubmit = (event) =>{

    
    setSubmit(true);
    const response = fetch('https://pandeymia-default-rtdb.firebaseio.com/Courses.json',{
      method:'POST',
      body: JSON.stringify({
        name: data.name,
        instruct: data.instruct,
        time: data.time,
        price: data.price,
      })
    })
     console.log(response);
    setData({
      name: "",
      instruct: "",
      time: "",
      price: "",
    })
    alert("Form is Submitted");
  }

  return (
    <>
      <div className="Formss">
        <form>
          <label>Course Name</label>
          <br />
          <input type="text" name="course" onChange={(e)=>handleChanges(e,"name")} value={data.name}/>

          <br />

          <label>Instructor Name</label>
          <br />
          <input type="text" name="instruct" onChange={(e)=>handleChanges(e,"instruct")} value={data.instruct}/>

          <br />

          <label>time</label>
          <br />
          <input type="text" name="time" onChange={(e)=>handleChanges(e,"time")} value={data.time}/>
          <br />

          <label>Price</label>
          <br />
          <input type="text" name="price" onChange={(e)=>handleChanges(e,"price")} value={data.price}/>
          <div className="cover">
            <button type="button" onClick={onSubmit} className="btn btnss btn-outline-success">
              Success
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
