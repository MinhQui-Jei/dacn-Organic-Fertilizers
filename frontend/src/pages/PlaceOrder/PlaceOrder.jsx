import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)


  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='Họ' />
          <input type="text" placeholder='Tên' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Địa Chỉ' />
        <div className="multi-fields">
          <input type="text" placeholder='Thành Phố' />
          <input type="text" placeholder='Số Nhà(nếu có)' />
        </div>

        <input type="text" placeholder='Số Điện Thoại' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Tổng</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />
            <div className="cart-total-details">
              <p>Phí vận chuyển</p>
              <p>${2}</p>
            </div>

            <hr />
            <div className="cart-total-details">
              <p>Thành tiền</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>

          </div>
          <button >Xác Nhận</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
