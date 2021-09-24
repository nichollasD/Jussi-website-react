import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Jussi.css';
import CardItem from './CardItem';

function Jussi() {
  return (
    <div className='hcontainer'>
      <div class="container">
        <div class="row">
          <div class="col-md-6 title">
            <h2>
            CRIAMOS
            <br/>
            LOJAS QUE
            <br/>
            VENDEM MAIS.
            </h2>
            <p>A JUSSI é especialista na criação de lojas <br/> usando a plataforma VTEX. Precisa criar sua <br/> loja ou migrar de plataforma?</p>
            <button type="button" class="btn btn-outline-dark border border-dark rounded">Veja nossas soluções</button>
          </div>

          <div class="col-md-6 img-responsive">
            <img src='/images/teste.png' class="img-responsive"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jussi;
