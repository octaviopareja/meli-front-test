import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Header from "./components/Header";
import Intro from "./components/Intro";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <ProductDetail exact path="/items/:id" />
        <ProductList path="/items" />
        <Intro path="/" />
      </Switch>
    </BrowserRouter>
  );
}
