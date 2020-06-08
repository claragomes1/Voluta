import React, { Fragment, useEffect, useState } from 'react';

import Task from './pages/Task';
import Header from './pages/Header';
import NewTask from './pages/NewTask';
import 'materialize-css/dist/css/materialize.min.css';



function App() {

  return (
    <Fragment>
      <Header />
      <div className="container">
        <NewTask />       
      </div>
    </Fragment>
  );
}

export default App;
