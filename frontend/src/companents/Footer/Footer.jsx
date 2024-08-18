import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Footer</p>
          <div className="footer-socaial-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Trang Chủ</li>
            <li>Tìm hiểu</li>
            <li>Hỏi đáp</li>
            <li>Hổ trợ</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+12-345-678</li>
            <li>minhqui2003tg@gmail.com</li>
          </ul>
        </div>

      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 - All Right Reserveb.</p>
    </div>
  )
}

export default Footer
