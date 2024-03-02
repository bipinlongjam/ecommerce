import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data based on productId
    fetchData(productId);
  }, [productId]);

  const fetchData = async (productId) => {
    try {
      const response = await fetch(`../products.json`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch product data: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      const selectedProduct = data.find((product) => product.id == productId);
      setProduct(selectedProduct);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  return (
    <Container className="mt-5">
      {product ? (
        <Row>
          <Col md={6}>
            <h2>{product.title}</h2>
            {/* <Row className="mb-4">
              {product.images.map((image, index) => (
                <Col key={index} xs={6} className="mb-3">
                  <Image src={image} fluid />
                </Col>
              ))}
            </Row> */}
            <h3>Reviews:</h3>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ProductPage;