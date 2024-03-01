import React,{useState} from 'react'
import {Navbar, Container, Button, Nav, Modal,Table } from 'react-bootstrap'
import { Link ,useLocation} from 'react-router-dom';
import './Header.css'

const Header = () => {

    const [showCartModal, setShowCartModal] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const handleShowCartModal = () => setShowCartModal(true);
    const handleCloseCartModal = () => setShowCartModal(false);

    const location = useLocation();
    const [cartElements, setCartElements] = useState([
        {
          id: 1,
          title: 'Colors',
          price: 100,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
          quantity: 2,
        },
        {
          id: 2,
          title: 'Black and white Colors',
          price: 50,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
          quantity: 3,
        },
        {
          id: 3,
          title: 'Yellow and Black Colors',
          price: 70,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
          quantity: 1,
        }
      ]);
    const handleCheckout = () => {
        if (cartItems.length === 0) {
          alert('No products in the cart!');
        } else {
          // Handle checkout logic here
          console.log('Checkout');
        }
      };
      const isStorePage = location.pathname === '/store';

      const totalAmount = cartElements.reduce((total, item) =>{
        return total + (item.price * item.quantity);
      },0)

      const handleRemoveItem = (id) => {
        const updatedCart = cartElements.filter(item => item.id !== id);
        setCartElements(updatedCart);
      };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className="nav-link-style">Home</Nav.Link>
          <Nav.Link as={Link} to="/store" className="nav-link-style">Store</Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link-style">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {isStorePage && (
        <>
        <Button variant="light" onClick={handleShowCartModal}>Cart</Button>
      <span className="counter">0</span>
        </>
      )}
    </Container>
    <Modal show={showCartModal} onHide={handleCloseCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Pic</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartElements.map((item, index) => (
                <tr key={item.id}>
                  <td><img src={item.imageUrl} alt={item.title} style={{ width: '100px' }} /></td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>Remove</Button> {/* Remove button */}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="text-right"><strong>Total:</strong></td>
                <td>${totalAmount}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCartModal}>Close</Button>
          <Button variant="primary" onClick={handleCheckout }>Checkout</Button>
        </Modal.Footer>
      </Modal>
  </Navbar>

  )
}

export default Header;