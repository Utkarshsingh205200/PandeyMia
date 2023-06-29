import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    conf: ",",
  });

  const [err, setErr] = useState({
    msg: {},
    isError: false,
  });

  // useEffect(()=>{
  //   console.log(data);
  // },[data])

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const onSubmit = (e) => {
    // e.prevent.default();

    if (data.password === data.conf) {
      setData({
        name: "",
        email: "",
        password: "",
        conf: "",
      });
    }
    else 
      alert("Please enter the same password");
  };

  return (
    <>
      <div className="Register px-5">
        <h1>Register</h1>

        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              id="name"
              onChange={(e) => handleChange(e, "name")}
              value={data.name}
              placeholder="Enter name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              onChange={(e) => handleChange(e, "email")}
              value={data.email}
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              onChange={(e) => handleChange(e, "password")}
              value={data.password}
              placeholder="password placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmpassword"
              id="exampleconfirmPassword"
              onChange={(e) => handleChange(e, "conf")}
              value={data.conf}
              placeholder="password placeholder"
            />
          </FormGroup>
        </Form>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </>
  );
}

export default App;
