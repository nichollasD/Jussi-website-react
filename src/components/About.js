import React from 'react';
import './About.css';

function About() {
  return (
      <div className='About-container'>
      <div class="container">
        <div class="row">
          <div class="col-md-2 title">
            <h3>OLÁ, SOMOS <br/> A JUSSI</h3>
            <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
            <button type="button" class="btn btn-outline-dark border border-dark rounded">Conheça a Jussi</button>
          </div>

          <div class="col-md-6 container-img">
            <img src='/images/jussi.png' class="img-responsive"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
