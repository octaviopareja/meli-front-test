/*CSS*/
import "./scss/breadcrumb.scss";

/*BOOTSTRAP*/
import Container from "react-bootstrap/Container";

export default function Breadcrumb(props) {
  //console.log(props.categories);
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
