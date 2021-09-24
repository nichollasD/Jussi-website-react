import React from 'react';
import './JussiBrands.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function JussiBrands() {
  return (
    <div className='brand-container'>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3>
              Nossas principais lojas VTEX &nbsp;&nbsp;&nbsp;&nbsp; →
            </h3>
          </div>
          <div class="col-md-2 brand">
            <a href=""><img src='/images/brastemp.png'/></a>
          </div>
          <div class="col-md-2 brand">
            <a href=""><img src='/images/compracerta.png'/></a>
          </div>
          <div class="col-md-1 brand">
            <a href=""><img src='/images/consul.png'/></a>
          </div>
          <div class="col-md-2 brand">
            <a href=""><img src='/images/thebar.png'/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JussiBrands;
