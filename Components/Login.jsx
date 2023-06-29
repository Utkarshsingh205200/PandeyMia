import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Login() {
  return (
    <div className='Register px-5'>
        <h1>Login</h1>

        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        </Form>
        <Button>Login</Button>
      </div>
  )
}

export default Login