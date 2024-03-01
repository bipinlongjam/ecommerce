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

    const handleCheckout = () => {
        if (cartItems.length === 0) {
          alert('No products in the cart!');
        } else {
          // Handle checkout logic here
          console.log('Checkout');
        }
      };
      const isStorePage = location.pathname === '/store';
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
        <Table bordered>
            <thead>
              <tr>
                <th>Price</th>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$10</td>
                <td>Item 1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>$20</td>
                <td>Item 2</td>
                <td>1</td>
              </tr>
              {/* Add more rows for additional items */}
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