import React from "react";
// import {sayHello} from "./util"
import { List } from "antd";
const cartData = Array(5)
  .fill(undefined)
  .map((v, i) => ({
    id: i,
    name: `商品${i}`,
    price: Math.round(Math.random() * 100),
  }));
const Cart: React.FC = () => (
  


  <div className="Cart">
    <List header={<div>购物车</div>} bordered dataSource={cartData} />
  </div>
);

export default Cart;
