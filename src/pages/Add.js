import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';

export default function Add() {
  return (
    <>
      <Header>
        <h1>Product Add</h1>
        <div>
          <Button>Save</Button>
          <Button as={Link} to='/'>Cancel</Button>
        </div>
      </Header>
    </>
  )
}
