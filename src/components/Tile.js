import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function Tile(props) {
  const shoes = useSelector((state) => {
    return state.shoes;
  });
  console.log(shoes[0].id);
  let propsi = "shoes[props.i + 1].shoes[props.i].id";
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://codingapple1.github.io/shop/shoes${
          shoes[props.i].id + 1
        }.jpg`}
        onClick={() => {
          props.navi("/products");
        }}
      />
      <Card.Body>
        <Card.Title>{shoes[props.i].title}</Card.Title>
        <Card.Text>{shoes[props.i].content}</Card.Text>
        <Card.Title>
          {shoes[props.i].price.toLocaleString("ko-KR")}원
        </Card.Title>
      </Card.Body>
      <button
        className="addCartBtn"
        onClick={() => {
          props.setModal(true);
          props.navi("/cart");
        }}
      >
        add to cart
      </button>
      <Card.Footer>
        <small className="text-muted">
          Last updated {props.i + 15} mins ago
        </small>
      </Card.Footer>
    </Card>
  );
}
