import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Cart(props) {
  let userCart = useSelector((state) => {
    return state.userCart;
  });
  console.log(userCart);
  return (
    <aside id="cartWrap">
      <div className="container">
        <div className="header">
          <h3>cart</h3>
          {/* <CloseButton
            onClick={() => {
              props.setModal(false);
              props.navi("/main");
            }}
          /> */}
          <Link to="/main">
            <CloseButton />
          </Link>
        </div>
        <Table responsive="lg">
          <thead>
            <tr>
              <th>ID</th>
              <th>상품명</th>
              <th>개수</th>
            </tr>
          </thead>
          <tbody>
            {userCart.map(function (a, i) {
              return (
                <tr>
                  <td>{userCart[i].id}</td>
                  <td>{userCart[i].name}</td>
                  <td>
                    <input type="number" placeholder={userCart[i].count} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </aside>
  );
}
