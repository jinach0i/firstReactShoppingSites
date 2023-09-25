import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
export default function DetailsWrap(props) {
  let { id } = useParams();
  return (
    <div id="detailsWrap">
      <Header navi={props.navi} />
      <div className="container">
        <div className="top">
          <div className="imgArea">
            <img src={`https://codingapple1.github.io/shop/shoes${id}.jpg`} />
          </div>
          <div className="selectArea">
            <h3>{props.shoes[id].title}</h3>
            <p>
              <span>{props.shoes[id].price}</span>원
            </p>
            <input type="number" placeholder="1"></input>
            <button className="addCartBtn">add to cart</button>
          </div>
        </div>
        <div className="main">
          <h2>{props.shoes[id].content}</h2>
        </div>
      </div>
      <Footer navi={props.navi} />
    </div>
  );
}
