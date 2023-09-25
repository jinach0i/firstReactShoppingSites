import { configureStore, createSlice } from "@reduxjs/toolkit";
import { data } from "./assets/data";
let userName = createSlice({
  name: "userName",
  initialState: { name: "최혜진", age: 3 },
  reducers: {
    changeName(state) {
      return "최혜화" + state;
    },
  },
});
let shoes = createSlice({
  name: "shoes",
  initialState: data,
});
let userCart = createSlice({
  name: "userCart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});
let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});
export default configureStore({
  reducer: {
    userName: userName.reducer,
    shoes: shoes.reducer,
    stock: stock.reducer,
    userCart: userCart.reducer,
  },
});
