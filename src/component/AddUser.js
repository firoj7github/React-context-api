import React from 'react'
import './Component.css'
import{Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const AddUser = () => {
  return (
    <Form className='form-control total-form'>
      <h3 className='text-center'>Add Data</h3>
        <FormGroup>
            <Label>Name : </Label>
            <Input  className='w-50 form-control' type='text' placeholder="Enter your Name"></Input>

        </FormGroup>
        <Button className="btn btn success" type="submit">Submit</Button>
        <Link to='/' className='cancel-data' >Cancel</Link>
    </Form>
  )
}

export default AddUser