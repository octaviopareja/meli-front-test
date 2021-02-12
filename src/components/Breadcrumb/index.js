import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

/*CSS*/
import "./scss/breadcrumb.scss";

/*BOOTSTRAP*/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Breadcrumb(props) {
  console.log(props.categories);
  return (
    <Container className="pl-0 pr-0">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          {props.categories.map((category) => {
            return <li class="breadcrumb-item">{`${category.name}`}</li>;
          })}
        </ol>
      </nav>
    </Container>
  );
}
