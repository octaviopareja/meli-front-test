import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import axios from "axios";

import Product from "../Product";

import Breadcrumb from "../Breadcrumb";

/*CSS*/
import "./scss/productList.scss";

/*BOOTSTRAP*/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProductList() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const { location } = history;
    const { search } = location;
    if (search === "?search=") {
      history.push("/");
    }

    searchService(search.substring(8, search.length));
  }, [history.location.search]);

  const axios = require("axios");

  const searchService = async (param) => {
    const apiurl = "https://api.mercadolibre.com";
    const uri = `${apiurl}/sites/MLA/search?q=${param}&limit=4`;
    const response = await axios.get(uri);
    const data = response.data;

    console.log(data);

    const products = [];

    data.results.forEach((element) => {
      products.push({
        id: element.id,
        title: element.title,
        price: element.price,
        thumbnail: element.thumbnail,
        condition: element.condition,
        free_shipping: element.shipping.free_shipping,
        location: element.address.state_name,
      });
    });

    setCategories(data.filters[0].values[0].path_from_root);
    setItems(products);
  };

  return (
    <>
      {categories ? <Breadcrumb categories={categories} /> : ""}

      <Container className="productList pb-16">
        <Row>
          <Col md={12}>
            <ul className="list-unstyled m-0">
              {items.map((info) => (
                <li>
                  <Product
                    id={info.id}
                    title={info.title}
                    price={info.price}
                    thumbnail={info.thumbnail}
                    location={info.location}
                    categories={categories}
                  />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
