import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
// eslint-disable-next-line import/order
import GeneticAlgorithm from './views/GeneticAlgorithm';
import AboutProgram from './views/AboutProgram';
import AboutDev from './views/AboutDev';
import Reference from './views/Reference';import './App.css';
// eslint-disable-next-line import/order
import { Button, Form } from 'antd';
import { BuildFilled } from '@ant-design/icons';

const Hello = () => {
  return (
    <Form className='myForm'>
      <h1>
        Генетический алгоритм <BuildFilled />
      </h1>
      <Link to={':/Genetic'}>
        <Button style={{ width: '100%' }}>Генетический алгоритм</Button>
      </Link>
      <Link to={':/ref'}>
        <Button style={{ width: '100%' }}>Справка</Button>
      </Link>
      <Link to={':/Program'}>
        <Button style={{ width: '100%' }}>О программе</Button>
      </Link>
      <Link to={':/dev'}>
        <Button style={{ width: '100%' }}>О разработчике</Button>
      </Link>
    </Form>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hello />} />
        <Route path=':/Genetic' element={<GeneticAlgorithm />} />
        <Route path=':/Program' element={<AboutProgram />} />
        <Route path=':/dev' element={<AboutDev />} />
        <Route path=':/ref' element={<Reference />} />
      </Routes>
    </Router>
  );
}
