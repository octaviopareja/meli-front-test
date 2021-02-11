import { Link, useHistory } from "react-router-dom";

import shippingIcon from "../../../src/assets/ic_shipping.png";

/*CSS*/
import "./scss/product.scss";

/*BOOTSTRAP*/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Product({ id, title, price, thumbnail, location }) {
  return (
    <Row>
      <Col lg={12} xs={12} noGutters>
        <Row className="pt-16 ">
          <Col
            lg={10}
            md={10}
            sm={8}
            xs={12}
            className="d-block d-sm-flex text-center text-sm-left"
            noGutters
          >
            <Link to={`/items/${id}`}>
              <img src={thumbnail} alt="img" className="imgProd" />
            </Link>
            <div>
              <h5 className="fs-24  mb-0 pb-32">
                $ {price} <img src={shippingIcon} alt="Envio a todo el país" />
              </h5>
              <h1 className="fs-18">{title}</h1>
            </div>
          </Col>
          <Col lg={2} md={2} sm={4} xs={12}>
            <p className="fs-12 location text-center text-sm-left pt-16">
              {location}
            </p>
          </Col>
          <hr />
        </Row>
      </Col>
    </Row>
  );
}
