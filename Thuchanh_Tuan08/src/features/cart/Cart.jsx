import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';

const sampleProducts = [
  { id: 1, name: 'Sản phẩm A', price: 100000 },
  { id: 2, name: 'Sản phẩm B', price: 200000 },
];

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div>
      <h2>🛒 Giỏ hàng</h2>

      <h4>Danh sách sản phẩm:</h4>
      {sampleProducts.map(product => (
        <div key={product.id}>
          {product.name} - {product.price.toLocaleString()}đ
          <button onClick={() => dispatch(addItem(product))}>Thêm vào giỏ</button>
        </div>
      ))}

      <hr />
      <h4>Sản phẩm trong giỏ:</h4>
      {cartItems.length === 0 && <p>Chưa có sản phẩm nào.</p>}

      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price.toLocaleString()}đ × {item.quantity}
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
            <button
              disabled={item.quantity <= 1}
              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
            >-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Xoá</button>
          </li>
        ))}
      </ul>

      <hr />
      <p><strong>Tổng số lượng:</strong> {totalItems}</p>
      <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}đ</p>
    </div>
  );
};

export default Cart;
    