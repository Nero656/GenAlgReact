import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'antd';
import {Main} from './GeneticScripts/Main'
import { RollbackOutlined } from '@ant-design/icons';


export default function GeneticAlgorithm() {

  return (
    <div>
      <Link to = "/" >
        <Button > назад <RollbackOutlined /></Button>
      </Link>
      <Main/>
    </div>
  );
}
