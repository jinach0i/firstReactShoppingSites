import { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import Tile from "../components/Tile";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Announcement from "../components/Announcement";
import Carousels1 from "../components/Carousels1";
import Breadcrumbs from "../components/Breadcrumbs";
import { useSelector } from "react-redux";
export default function MainWrap(props) {
  let navi = props.navi;
  const [clickedIndex, setClickedIndex] = useState(0);
  let [modal, setModal] = useState(false);
  let [lever, setLever] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLever(false);
    }, 2000);
  });
  const state = useSelector((state) => {
    return state;
  });
  return (
    <div id="mainWrap">
      {lever ? <Announcement /> : null}
      <Header navi={props.navi} />
      <Carousels1 />
      <div id="container">
        <Breadcrumbs />
        {/* {modal ? (
          <Cart navi={props.navi} modal={modal} setModal={setModal} />
        ) : null} */}
        {/* 자식 n번 card를 클릭하면 card 안에 n번째 사진이 뜨게 */}
        <CardGroup>
          {state.shoes.map(function (a, i) {
            return (
              <Tile
                navi={navi}
                clickedIndex={clickedIndex}
                modal={modal}
                setModal={setModal}
                i={i}
              />
            );
          })}
        </CardGroup>
      </div>
      <Footer />
    </div>
  );
}
