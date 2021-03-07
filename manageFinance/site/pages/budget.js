import Head from 'next/head';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

import { Jumbotron, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Budget() {
  return (
    <div>
      <Head>
        <title>Orçamento - Eduardo Developer</title>
      </Head>
      <Menu />
      <Jumbotron fluid className="descr-top">
        <style>
          {
            `.descr-top{
                background-color: #96f2bf;
                color: #000;
                padding-top: 40px;
                padding-bottom: 40px;
                margin-bottom:0rem !important;
            }`
          }
        </style>
        <Container className="text-center">
          <h1>Orçamento</h1>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="form-budger">
        <style>
          {
            `.form-budger{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: #fff;
              margin-bottom: 0rem !important;
            }`
          }
        </style>
        <Container>
          <Form>
            <FormGroup>
              <Label for="name" sm={2}>Nome</Label>
              <Input type="text" name="name" id="name" placeholder="Digite seu nome" />
            </FormGroup>
            <FormGroup>
              <Label for="email" sm={2}>E-mail</Label>
              <Input type="mail" name="email" id="email" placeholder="Digite seu melhor E-mail" />
            </FormGroup>
            <FormGroup>
              <Label for="phone" sm={2}>Celular</Label>
              <Input type="text" name="phone" id="phone" placeholder="(xx) xxxxx-xxxx" />
            </FormGroup>
            <FormGroup>
              <Label for="zap" sm={4}>Que tal WhatsApp?</Label>
              <Input type="text" name="zap" id="zap" placeholder="(xx) xxxxx-xxxx" />
            </FormGroup>
            <FormGroup>
              <Label for="project" sm={4}>Fale mais sobre o job!</Label>
              <Input type="textarea" row="3" name="project" id="project" placeholder="Conte mais!" />
            </FormGroup>
            <FormGroup check row>
              <Button outline type="submit">Enviar</Button>
            </FormGroup>
          </Form>
        </Container>
      </Jumbotron>
      <Footer />

    </div>
    );
}

export default Budget;