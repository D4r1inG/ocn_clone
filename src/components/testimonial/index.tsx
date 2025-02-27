import React from 'react';

export const Testimonial = () => {
  return (
    <section className="py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container mb-5 mb-md-6 mb-xl-10">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
            <h2 className="display-3 fw-bolder mb-4">
              Sản phẩm của chúng tôi xây dựng dựa trên <br />
              <mark className="text-accent bsb-tpl-highlight">trải nghiệm</mark> của khách hàng
            </h2>
          </div>
        </div>
      </div>
      <div className="container overflow-hidden">
        <div className="row gy-4 gy-md-0 gx-xxl-5">
          <div className="col-12 col-md-4">
            <div className="card border-0 border-bottom border-primary shadow-sm">
              <div className="card-body p-4 p-xxl-5">
                <figure>
                  <img
                    className="img-fluid rounded rounded-circle mb-4 border border-5"
                    loading="lazy"
                    src="./img/testimonial/testimonial-img-1.jpg"
                    alt="Luna John"
                  />
                  <figcaption>
                    <div className="bsb-ratings text-warning mb-3" data-bsb-star={5} data-bsb-star-off={0} />
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Hệ thống linh hoạt và tiết kiệm chi phí đáng kể. Đội ngũ kỹ thuật hỗ trợ nhanh chóng,
                      giải quyết sự cố kịp thời.
                    </blockquote>
                    <h4 className="mb-2">Nguyễn Văn Hùng</h4>
                    <h5 className="fs-6 text-secondary mb-0">System Admin</h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0 border-bottom border-primary shadow-sm">
              <div className="card-body p-4 p-xxl-5">
                <figure>
                  <img
                    className="img-fluid rounded rounded-circle mb-4 border border-5"
                    loading="lazy"
                    src="./img/testimonial/testimonial-img-2.jpg"
                    alt="Mark Smith"
                  />
                  <figcaption>
                    <div className="bsb-ratings text-warning mb-3" data-bsb-star={4} data-bsb-star-off={1} />
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Các chuyên gia phân tích kỹ nhu cầu, đưa ra giải pháp phù hợp và hỗ trợ triển khai từng
                      bước. Nhờ đó, hệ thống vận hành trơn tru ngay từ đầu mà không gặp rủi ro lớn.
                    </blockquote>
                    <h4 className="mb-2">Trần Minh Anh</h4>
                    <h5 className="fs-6 text-secondary mb-0">Solution Architect</h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0 border-bottom border-primary shadow-sm">
              <div className="card-body p-4 p-xxl-5">
                <figure>
                  <img
                    className="img-fluid rounded rounded-circle mb-4 border border-5"
                    loading="lazy"
                    src="./img/testimonial/testimonial-img-4.jpg"
                    alt="Luke Reeves"
                  />
                  <figcaption>
                    <div className="bsb-ratings text-warning mb-3" data-bsb-star={5} data-bsb-star-off={0} />
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Giải pháp firewall được triển khai bài bản, giúp bảo vệ hệ thống khỏi tấn công mạng hiệu
                      quả. Đội ngũ hỗ trợ 24/7, luôn sẵn sàng xử lý sự cố ngay khi cần.
                    </blockquote>
                    <h4 className="mb-2">Lê Quốc Bảo</h4>
                    <h5 className="fs-6 text-secondary mb-0">SOC Manager</h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
