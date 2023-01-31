import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';


export default function List() {
  return (
    <>
      <Header>
        <h1>Product List</h1>
        <div>
          <Button as={Link} to='/addproduct'>Add</Button>
          <Button>Mass Delete</Button>
        </div>
      </Header>
    </>
  )
}
