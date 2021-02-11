import { Link } from "react-router-dom";
import logo from "../../assets/Logo_ML.png";

/*CSS*/
import "./scss/logo.scss";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="MercadoLibre" />
    </Link>
  );
}
