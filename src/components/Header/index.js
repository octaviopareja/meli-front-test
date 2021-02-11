import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Logo";

/*CSS*/
import "./scss/header.scss";

/*BOOTSTRAP*/
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  const history = useHistory();
  const [search, setsearch] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    history.push(`/items?search=${search}`);
  };

  const handleInputChange = (e) => {
    setsearch(e.target.value);
  };

  return (
    <Row fluid className="header">
      <Container className="p-0">
        <Row className="pt-12 pb-12">
          <Col md={1} xs={12} className="mx-auto">
            <Logo />
          </Col>
          <Col md={11} xs={12}>
            <Form onSubmit={formSubmitHandler}>
              <Form.Row className="align-items-center">
                <Col md={12}>
                  <input
                    id="inlineFormInputGroup"
                    placeholder="Nunca dejes de buscar"
                    className="fs-18 searchInput"
                    onChange={handleInputChange}
                    value={search}
                  />
                  <button type="submit" className="search-btn">
                    <div
                      role="img"
                      aria-label="Buscar"
                      className="icon-search"
                    ></div>
                  </button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Row>
  );
}
