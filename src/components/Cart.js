import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Cart(props) {
  let state = useSelector((state) => {
    return state;
  });
  console.log(state.userName);
  return (
    <aside id="cartWrap">
      <div className="container">
        <div className="header">
          <h3>{state.userName.name}의 장바구니</h3>
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
              <th width="25%">모델명</th>
              <th>상품명</th>
              <th>개수</th>
            </tr>
          </thead>
          <tbody>
            {state.userCart.map(function (a, i) {
              return (
                <tr>
                  <td>{state.userCart[i].id}</td>
                  <td>{state.userCart[i].name}</td>
                  <td>
                    <input
                      type="number"
                      placeholder={state.userCart[i].count}
                    />
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
