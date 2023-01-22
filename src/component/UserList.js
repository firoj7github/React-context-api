import React from 'react'
import { Link } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';

const UserList = () => {
  return (
    <ListGroup>
      <ListGroupItem className='d-flex'> <h4>User One</h4>
      <div className='ms-auto'>
        <Link className='btn btn-success' to='/edit'>Edit</Link>
        <Button className='btn btn-danger ms-2'>Delete</Button>

      </div>
      </ListGroupItem>
     

    </ListGroup>
  )
}

export default UserList