import React from 'react';
import { Envelope, Location, Phone } from '../icons';

export const Contact = () => {
  return (
    <section id="scrollspyContact" className="section is-medium">
      <div className="container">
        <div className="contact-main">
          <img className="img-fluid rounded" loading="lazy" src="./img/contact/contact-img-1.jpg" alt="" />

          <div className="contact-content">
            <div className="title-wrapper">
              <h2 className="title is-2">Liên hệ</h2>
              <div className="divider is-centered" />
            </div>
            <p className="lead fs-4 text-secondary mb-5 text-center">
              Chúng tôi luôn tìm kiếm cơ hội để hợp tác, giúp đỡ khách hàng. Nếu bạn quan tâm đến việc làm
              việc với chúng tôi, vui lòng liên hệ theo một trong những cách sau.
            </p>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="text-primary">
                  <Location />
                </div>
                <div>
                  <h4>Địa chỉ</h4>
                  <address className="subtitle is-5 is-muted">
                    Tầng 4, Tòa N01-T2, Khu Ngoại Giao Đoàn, Phường Xuân Tảo, Quận Bắc Từ Liêm, Thành phố Hà
                    Nội, Việt Nam
                  </address>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="text-primary">
                  <Phone />
                </div>
                <div>
                  <h4 className="mb-3">Số điện thoại</h4>
                  <p className="mb-0">
                    <a className="subtitle is-5 is-muted" href="tel:+15057922430">
                      (+84)376332287
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="text-primary">
                  <Envelope />
                </div>
                <div>
                  <h4 className="mb-3">Email</h4>
                  <p>
                    <a className="subtitle is-5 is-muted" href="mailto:info@ocn.com.vn">
                      info@ocn.com.vn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
