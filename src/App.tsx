import React from 'react';
import './app.css';
import './app.less';

import * as css from './app.module.css';

import Class from './components/Class';
import { Demo1, Demo2 } from '@/components/index';

import smallImg from './assets/5kb.png';
import bigImg from './assets/22kb.png';

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('BASE_ENV', process.env.BASE_ENV);

function App() {
  return (
    <>
      <Class />
      <Demo1 />
      <h2 className='app'>webpack-react-t1s</h2>
      <h2 className={css.app}>webpack-react-ts</h2>

      <img src={smallImg} alt='小于10kb的图片' />
      <img src={bigImg} alt='大于于10kb的图片' />
    </>
  );
}

export default App;
