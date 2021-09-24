import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';
import Select from 'react-select';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [categories, setCategories] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      setCategories(response.data);
      console.log(response.data)
    })
    .catch(error => {
    console.log(error)
    });

  }, [categories]);

  // const options = categories.map((item) => {
  //   console.log(item.name)
  //   return item.name;
  // });

  const options = [
  { value: 'Chelsey Dietrich', label: 'Chelsey Dietrich' },
  { value: 'Kurtis Weissnat', label: 'Kurtis Weissnat' },
  { value: 'Nicholas Runolfsdottir V', label: 'Nicholas Runolfsdottir V' },
  { value: 'Glenna Reichert', label: 'Glenna Reichert' },
  { value: 'Clmentina DuBuque', label: 'Clmentina DuBuque' },
  { value: 'Leanne Graham', label: 'Leanne Graham' },
  { value: 'Ervin Howell', label: 'Ervin Howell' },
  { value: 'Clementine Bauch', label: 'Clementine Bauch' },
  { value: 'Patricia Lebsack', label: 'Patricia Lebsack' },
]

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='/images/logo.png'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nossas soluções
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Conheça a Jüssi
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && 
          <><>
            <Select options={options} />
            </>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
            <Link to='/' className='navbar-logo-cart' onClick={closeMobileMenu}>
                <img src='/images/cart.png'/>
            </Link>
            </>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
