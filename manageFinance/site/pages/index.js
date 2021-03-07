import React from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

import { Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);


function Home() {
  return (
      <div>
      <Head>
        <title>Home - Eduardo Developer</title>
        <meta name="description" content="Orçamento inteligente de serviços"/>
      </Head>
        <Menu />
        <Jumbotron fluid className="descr-top">
          <style>
            {
              `.descr-top{
                background-color: #96f2bf;
                margin-bottom:0rem;
              }.circle{
                width: 140px;
                height: 140px;
                background-color: #00a351;
                font-size: 40px;
                padding-top: 35px;
                color: #fff;
              }.center{
                margin: 0 auto !important
              }`
            }
          </style>
          <Container className="text-center">
            <h1 className="display-4">Temos a solução que a sua empresa precisa!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <p className="lead">
            <a href='/budget' className="btn btn-outline-dark btn-lg mt-4">Orçamento</a>
            </p>
          </Container>
        </Jumbotron>
      <Jumbotron fluid className="services">
        <style>
          {
            `.services{
              background-color: #fff;
              margin-bottom:0rem;
            }
          `}
        </style>
        <Container className="text-center">
            <div>
              <h2 className="display-4">Serviços</h2>
              <p className="lead pb-4">Organize seu orçamento de forma inteligente</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="rounded-circle circle center">
                  <FontAwesomeIcon icon="laptop-code"/>
                  </div>
                    <h2 className="mt-4 mb-4">
                        App Desktop
                    </h2>
                      <p>Organize seu orçamento de forma inteligente</p>
                </div>
                <div className="col-md-4">
                  <div className="rounded-circle circle center">
                  <FontAwesomeIcon icon="mobile-alt"/>
                    </div>
                <h2 className="mt-4 mb-4">
                        App Mobile
                    </h2>
                      <p>Organize seu orçamento de forma inteligente</p>
                </div>
                <div className="col-md-4">
                  <div className="rounded-circle circle center">
                  <FontAwesomeIcon icon="network-wired"/>
                  </div>
                <h2 className="mt-4 mb-4">
                        App Web
                    </h2>
                      <p>Organize seu orçamento de forma inteligente</p>
                </div>
              </div>
            </div>
        </Container>
      </Jumbotron>
      <Footer />
      </div>

    );
}

export default Home;