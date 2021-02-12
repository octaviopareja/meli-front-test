import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import LoadingSpinner from "../Loading";

/*CSS*/
import "./scss/productDetail.scss";

/*BOOTSTRAP*/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProductDetail(props) {
  const history = useHistory();
  const [item, setItem] = useState([]);
  const [itemDescrip, setItemDescrip] = useState(null);
  const [pictures, setPictures] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { location } = history;
    const { pathname } = location;
    const id = pathname.substring(7, pathname.length);
    getItem(id);
    setLoading(true);
  }, [history]);

  const axios = require("axios");

  const getItem = async (id) => {
    const apiurl = "https://api.mercadolibre.com";
    const uri = `${apiurl}/items/${id}`;
    const response = await axios.get(uri);
    const data = response.data;

    const uriDescrip = `${apiurl}/items/${id}/descriptions`;
    const responseDescrip = await axios.get(uriDescrip);
    const dataDescrip = responseDescrip.data;

    // console.log(data);

    setItem(data);
    setItemDescrip(dataDescrip);
    setPictures(data.pictures);
    setLoading(false);
  };

  return (
    <>
      {!loading ? (
        <Container className="productList p-32 mt-5">
          <Row>
            <Col lg={12} xs={12} noGutters>
              <Row className="pt-16">
                <Col sm={8} xs={12} className="order-1 order-sm-0">
                  <Row className="pb-32">
                    <Col
                      sm={12}
                      xs={12}
                      className="d-flex justify-content-center"
                    >
                      {pictures
                        ? pictures
                            .slice(0, 1)
                            .map((info) => <img src={info.url} alt="img" />)
                        : ""}
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} xs={12}>
                      <div className="item__description">
                        <h2 className="fs-28 pb-32">
                          Descripción del producto
                        </h2>
                        <p className="fs-16 description">
                          {itemDescrip
                            ? itemDescrip.map((info) => (
                                <p> {info.plain_text}</p>
                              ))
                            : ""}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4} xs={12} className="order-0 order-sm-1">
                  <span className="fs-14">
                    {`
                    ${item.condition === "new" ? "Nuevo" : "Usado"}
                    ${
                      item.sold_quantity > 0
                        ? " - " + item.sold_quantity + " vendidos"
                        : ""
                    }
                  `}
                  </span>
                  <div className="pt-16">
                    <h1 className="fs-24 fw-bold pb-32">{item.title}</h1>
                    <h5 className="fs-46  mb-0 ">
                      $ {item.price ? item.price.toLocaleString("de-DE") : ""}
                    </h5>
                  </div>
                  <div className="pt-32">
                    <button className="btn btn-primary w-100 btnBlue">
                      Comprar
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
