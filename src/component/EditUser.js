import React from 'react'
import './Component.css'
import{Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const EditUser = () => {
  return (
    <Form className='form-control total-form'>
    <h3 className='text-center'>Edit Data</h3>
      <FormGroup>
          <Label>Name : </Label>
          <Input  className='w-50 form-control' type='text' placeholder="Enter your Name"></Input>

      </FormGroup>
      <Button className="btn btn success" type="submit">Edit</Button>
      <Link to='/' className='cancel-data' >Cancel</Link>
  </Form>
  )
}

export default EditUser