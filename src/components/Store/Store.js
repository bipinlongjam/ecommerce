import React from 'react'
import {useCart} from '../../context/CartContext'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import generic from '../../assests/generic.png'
import './Store.css'

const Store = () => {

    const {addCartItem} = useCart();

    const productsArr = [
        {
          id:1,
          title: 'Colors',
          price: 100,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
          quantity: 1
        },
        {
          id:2,
          title: 'Black and white Colors',
          price: 50,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
          quantity: 1
        },
        {
          id:3,
          title: 'Yellow and Black Colors',
          price: 70,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
          quantity: 1
        },
        {
          id:4,
          title: 'Blue Color',
          price: 100,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          quantity: 1
        },
      ];

     const handleAddToCart = (product) =>{
      addCartItem(product)
     } 
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center ">
          <img src={generic} alt="Image"  className="img-fluid" style={{ width: '100%', height: '350px' }} />
        <Col className="text-center mb-5">
          <h2 className="mt-3">Store</h2>
        </Col>
      </Row>
      <Container>
      <Row>
        {productsArr.map(product => (
          <Col key={product.title} xs={12} sm={6} md={4} lg={3}>
            <Card.Title className='mb-2'>{product.title}</Card.Title>
            <Card className="mb-4 product-card">
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary" onClick={()=> handleAddToCart(product)} className='justify-content-end'>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    
    </Container>
  )
}

export default Store