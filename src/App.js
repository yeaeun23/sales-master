import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '강예은',
    'birthday': '940323',
    'gender': '여자',
    'job': '직장인'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김민지',
    'birthday': '940909',
    'gender': '여자',
    'job': '직장인'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '권소리',
    'birthday': '940710',
    'gender': '여자',
    'job': '직장인'
  },]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender} />
          );
        })
      }
    </div>
  );
}

export default App;
