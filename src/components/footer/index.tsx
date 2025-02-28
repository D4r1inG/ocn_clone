import React from 'react';
import { Facebook, Instagram, Logo, Twitter, Youtube } from '../icons';

export const Footer = () => {
  return (
    <footer className="footer footer-dark">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="footer-logo">
              <Logo />
            </div>
          </div>
          <div className="column">
            <div className="footer-column">
              <div className="footer-header">
                <h3>Liên hệ</h3>
              </div>
              <p>
                Đăng ký để nhận các thông tin về các chương trình khuyến mãi, và các thay đổi về công nghệ.
              </p>
              <ul className="link-list">
                <li>
                  <a href="tel:+15057922430">(+84)376332287</a>
                </li>
                <li>
                  <a href="mailto:info@ocn.com.vn">info@ocn.com.vn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="footer-column">
              <div className="footer-header">
                <h3>Liên kết</h3>
              </div>
              <ul className="link-list">
                <li>
                  <a href="#">Về chúng tôi</a>
                </li>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
                <li>
                  <a href="#">Chính sách dịch vụ</a>
                </li>
                <li>
                  <a href="#">Điều khoản sử dụng</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="footer-column">
              <div className="footer-header">
                <h3>Cập nhật thông tin </h3>
              </div>
              <p>
                Đăng ký để nhận các thông tin về các chương trình khuyến mãi, và các thay đổi về công nghệ.
              </p>
              <div className="footer-input-group">
                <input type="email" placeholder="Email" />
                <button className="button btn-align-md primary-btn raised">Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Bootstrap Brain Component */}
      <div className="container">
        <div className="border-top mt-40 footer-bottom">
          <div className="footer-bottom-content">
            <div>© 2025. All Rights Reserved.</div>
            <div className="text-secondary mb-10 light-gray-text">
              Built by{' '}
              <a href="https://ocn.com.vn/" className="text-primary">
                OCN
              </a>{' '}
              with <span className="text-primary">♥</span>
            </div>
          </div>

          <div className="footer-social">
            <ul>
              <li>
                <a href="#!">
                  <Facebook />
                </a>
              </li>
              <li className="nav-item">
                <a href="#!">
                  <Youtube />
                </a>
              </li>
              <li className="nav-item">
                <a href="#!">
                  <Twitter />
                </a>
              </li>
              <li className="nav-item">
                <a href="#!">
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
