import React from 'react';
import store from '../store';
import {connect} from 'react-redux';


function Home(){
  return (
    <div>
      <ul className="list-unstyled titleDIV col-sm-12 col-xs-12">
        <h1 className="title">WELCOME</h1>
        <h4 className="title">TO THE</h4>
        <h1 className="title">SPACE ACADEMY</h1>
      </ul>
    </div>
  );
}

export default Home;
