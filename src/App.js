import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import DetailsWrap from "./pages/DetailsWrap";
import EntranceWrap from "./pages/EntranceWrap";
import MainWrap from "./pages/MainWrap";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
export default function App() {
  const state = useSelector((state) => {
    return state;
  });
  console.log(state.stock);
  let navi = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EntranceWrap navi={navi} />} />
        <Route path="/main" element={<MainWrap navi={navi} />} />
        <Route
          path="/products/:id"
          element={<DetailsWrap navi={navi} />}
        ></Route>
        <Route path="cart" element={<Cart />} />
        <Route
          path="event"
          element={
            <div id="eventWrap">
              <div className="container">
                <h1>오늘의 이벤트</h1>
                <Outlet></Outlet>
              </div>
              <button>X</button>
            </div>
          }
        >
          <Route
            path="one"
            element={
              <>
                <p>첫 주문시 양배추즙 서비스</p>
              </>
            }
          />
          <Route
            path="two"
            element={
              <>
                <p>생일 기념 쿠폰 받기</p>
              </>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <>
              <h1>404</h1>
              <h3>Page not found</h3>
              <p>
                The page you are looking for doesn't available now.
                <br />
                Go back to previous page to choose another direction.
              </p>
            </>
          }
        />
      </Routes>
    </div>
  );
}
