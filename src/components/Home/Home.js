import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import generic from '../../assests/generic.png'

const Home = () => {

    const tourData = [
        {
          date: 'JUL 16',
          destination: 'DETROIT, MI',
          theatre: 'DTE ENERGY MUSIC THEATRE',
        },
        {
          date: 'JUL 19',
          destination: 'TORONTO, ON',
          theatre: 'BUDWEISER STAGE',
        },
        {
          date: 'JUL 22',
          destination: 'BRISTOW, VA',
          theatre: 'JIGGY LUBE LIVE',
        },
        {
          date: 'JUL 29',
          destination: 'PHOENIX, AZ',
          theatre: 'AK-CHIN PAVILION',
        },
        {
          date: 'AUG 2',
          destination: 'LAS VEGAS, NV',
          theatre: 'T-MOBILE ARENA',
        },
        {
          date: 'AUG 7',
          destination: 'CONCORD, CA',
          theatre: 'CONCORD PAVILION',
        },
      ];
  return (
    <Container fluid>
        <Row className="justify-content-center align-items-center ">
          <img src={generic} alt="Image" lassName="img-fluid" style={{ width: '100%', height: '350px' }} />
      </Row>
    <Container>
    <Col className="text-center mb-5 ">
          <h2 className="mt-3">Tour Dates</h2>
        </Col>
    {tourData.map((tour, index) => (
        <div key={index} >
      <Row className="mb-3 text-center justify-content-center">
        <Col md={2}>
          <p>{tour.date}</p>
        </Col>
        <Col md={4}>
          <p>{tour.destination} {tour.theatre}</p>
        </Col>
        <Col md={3}>
          <Button variant="primary">BUY TICKETS</Button>
        </Col>
      </Row>
      <hr/>
      </div>
    ))}
  </Container>
  </Container>
  )
}

export default Home