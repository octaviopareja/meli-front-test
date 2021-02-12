/*BOOTSTRAP*/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProductList() {
  return (
    <Container className="productList mt-5">
      <Row>
        <Col md={12}>
          <p className="text-center p-5">Comienza buscando algo...</p>
        </Col>
      </Row>
    </Container>
  );
}
