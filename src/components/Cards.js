import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>// NOSSAS SOLUÇÕES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/P1.png'
              text1='Nome do Produto #1'
              text2='Descrição do produto #1'
              text3='° Feature 1 '
              path=''
            />
            <CardItem
              src='images/P2.png'
              text1='Nome do Produto #2'
              text2='Descrição do produto #2'
              text3='° Feature 1'
              path=''
            />
            <CardItem
              src='images/P3.png'
              text1='Nome do Produto #3'
              text2='Descrição do produto #3'
              text3='° Feature 1'
              path=''
            />
            <CardItem
              src='images/P4.png'
              text1='Nome do Produto #4'
              text2='Descrição do produto #4'
              text3='° Feature 1'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
