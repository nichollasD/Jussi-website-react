import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h6 className='cards__item__text'>{props.text1}</h6>
          </div>
          <div className='cards__item__info'>
            <p className='color-pink'>{props.text2}</p>
          </div>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{props.text3}</p>
          </div>
          <div className='cards__item__info'>
            <button type="button" class="button btn btn-primary">Ver solução</button>
          </div>
        </Link>
      </li>
      <li>
      </li>
    </>
  );
}

export default CardItem;
