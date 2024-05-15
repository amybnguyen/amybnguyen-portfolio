import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import profilepic from './AmyNguyen-square.png'


const AboutMe = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-3 m-md-3 text-left">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <Container fluid="lg">
            <Row>
                <Col>
                  <div>
                    <h1 className="display-6 font-weight-normal" style={{color:'#0d6efd'}}>Want to learn more?</h1>
                    <p className="lead font-weight-normal">Prior to my work in software development, I majored in Biochemistry and Molecular Biology. I spent time building a few biotech start-ups, speciailizing in software support like automated liquid handlers and laboratory information management systems for the laboratory processes.</p>
                    <p className="lead font-weight-normal">For more information, view my projects and resume.</p>
                    <div className="text-center">
                    <a className="btn btn-outline-secondary m-2" href="/projects">Projects</a>
                    <a className="btn btn-outline-secondary m-2" href="/resume">Resume</a>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <img style={{ width: 300, height: 300 }} src={profilepic} alt="profile"/>
                  </div>
                </Col>
            </Row>
        </Container>
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
  );
};

export default AboutMe;
