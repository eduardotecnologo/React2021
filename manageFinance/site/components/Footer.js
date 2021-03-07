import React from 'react';

import { Jumbotron, Container  } from 'reactstrap';

const Footer = () =>{
  return (
    <Jumbotron fluid className="footer">
      <style>
        {
          `.footer{
            background-color: #00a351;
            color: #fff;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-bottom: 0rem !important;
          }`
        }
      </style>
      <Container className="text-center">
        <h1 className="lead">Footer</h1>
      </Container>
    </Jumbotron>
  )
}
export default Footer;