import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Jussi from '../Jussi';
import Contact from '../Contact';
import Footer from '../Footer';
import About from '../About';
import JussiBrands from '../JussiBrands';

function Home() {
  return (
    <>
      <Jussi />
      <JussiBrands />
      <Cards />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
