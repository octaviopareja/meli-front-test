import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import Breadcrumb from "../Breadcrumb";

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
  const [categoryId, setCategoryId] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const { location } = history;
    const { pathname } = location;
    const id = pathname.substring(7, pathname.length);
    getItem(id);
  }, [history]);

  //console.log("la url es " + url_Opciones);
  const axios = require("axios");

  const getItem = async (id) => {
    const apiurl = "https://api.mercadolibre.com";
    const uri = `${apiurl}/items/${id}`;
    const response = await axios.get(uri);
    const data = response.data;

    const uriDescrip = `${apiurl}/items/${id}/descriptions`;
    const responseDescrip = await axios.get(uriDescrip);
    const dataDescrip = responseDescrip.data;

    console.log(data);
    //console.log(data.pictures);

    setItem(data);
    setItemDescrip(dataDescrip);
    setPictures(data.pictures);
    setCategoryId(data.category_id);
  };

  const getCategories = async (categoryId) => {
    const apiurl = "https://api.mercadolibre.com";
    const uriCats = `${apiurl}/categories/${categoryId}`;
    const responseCats = await axios.get(uriCats);
    const dataCats = responseCats.data;
    console.log(dataCats.path_from_root);
    setCategories(dataCats.path_from_root);
  };

  return (
    <>
      {categories ? <Breadcrumb categories={categories} /> : ""}
      <Container className="productList p-32">
        <Row>
          <Col lg={12} xs={12} noGutters>
            <Row className="pt-16">
              <Col sm={8} xs={12}>
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
                      <h2 className="fs-28 pb-32">Descripción del producto</h2>
                      <p className="fs-16 description">
                        {itemDescrip
                          ? itemDescrip.map((info) => <p> {info.plain_text}</p>)
                          : ""}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={4} xs={12}>
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
    </>
  );
}
