import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, product_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Sản Phẩm</p>
          <p>Tên Sản Phẩm</p>
          <p>Giá</p>
          <p>Số Lượng</p>
          <p>Thành Tiền</p>
          <p>x</p>
        </div>
        <br />
        <hr />
        {product_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Tổng</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />
            <div className="cart-total-details">
              <p>Phí Vận Chuyển</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>

            <hr />
            <div className="cart-total-details">
              <p>Thành Tiền</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>

          </div>
          <button onClick={() => navigate('/order')}>Thanh Toán</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Nếu bạn có mã giảm giá hãy ấn mã giảm giá sao đó ấn Enter</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='code' />
              <button>Nhập</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
