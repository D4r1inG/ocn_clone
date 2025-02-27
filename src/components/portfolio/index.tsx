import React from 'react';

export const Portfolio = () => {
  return (
    <section id="scrollspyPortfolio" className="py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container mb-5 mb-md-6 mb-xl-10">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
            <h2 className="display-3 fw-bolder mb-4">
              Cùng xem qua các dự án của chúng tôi để{' '}
              <mark className="text-accent bsb-tpl-highlight">bắt đầu</mark> hành trình mới của bạn.
            </h2>
          </div>
        </div>
      </div>
      <div className="container overflow-hidden">
        <div className="row gy-2 g-md-2 g-xl-3 bsb-project-2-grid">
          <div className="col-12 col-md-4 bsb-project-2-item">
            <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  src="./img/portfolio/project-landscape-1.jpg"
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">Hạ tầng ảo hóa</h3>
                <div className="text-white bsb-hover-fadeInRight">Computing</div>
              </figcaption>
            </figure>
          </div>
          <div className="col-12 col-md-4 bsb-project-2-item">
            <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale bsb-hover-scale-up"
                  src="./img/portfolio/project-portrait-1.jpg"
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInUp">Tường lửa nội bộ</h3>
                <div className="text-white bsb-hover-fadeInDown">Firewall</div>
              </figcaption>
            </figure>
          </div>
          <div className="col-12 col-md-4 bsb-project-2-item">
            <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  src="./img/portfolio/project-landscape-2.jpg"
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">Tu vấn giải pháp</h3>
                <div className="text-white bsb-hover-fadeInRight">Solution</div>
              </figcaption>
            </figure>
          </div>
          <div className="col-12 col-md-4 bsb-project-2-item">
            <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale bsb-hover-scale-up"
                  src="./img/portfolio/project-portrait-2.jpg"
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInUp">Thiết bị IOT</h3>
                <div className="text-white bsb-hover-fadeInDown">IoT</div>
              </figcaption>
            </figure>
          </div>
          <div className="col-12 col-md-4 bsb-project-2-item">
            <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale bsb-hover-scale-up"
                  src="./img/portfolio/project-portrait-3.jpg"
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInUp">Thiết bị Server</h3>
                <div className="text-white bsb-hover-fadeInDown">Hardware</div>
              </figcaption>
            </figure>
          </div>
          <div className="col-12 col-md-4 bsb-project-2-item">
            <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale bsb-hover-scale-up"
                  src="./img/portfolio/project-portrait-4.jpg"
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInUp">Quản lý dịch vụ</h3>
                <div className="text-white bsb-hover-fadeInDown">Service</div>
              </figcaption>
            </figure>
          </div>
          <div className="col-12 col-md-4 bsb-project-2-item">
            <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  src="./img/portfolio/project-landscape-3.jpg"
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">Tư vấn triển khai</h3>
                <div className="text-white bsb-hover-fadeInRight">Design</div>
              </figcaption>
            </figure>
          </div>
          <div className="col-12 col-md-4 bsb-project-2-item">
            <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  src="./img/portfolio/project-landscape-4.jpg"
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">Ứng cứu sự cố</h3>
                <div className="text-white bsb-hover-fadeInRight">Disaster Recovery</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
