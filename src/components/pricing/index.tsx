import React from 'react';

export const Pricing = () => {
  return (
    <section
      id="scrollspyPricing"
      className="bsb-pricing-1 bsb-tpl-bg-sea-shell py-5 py-xl-8 bsb-section-py-xxl-1"
    >
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-center">
          <div className="col-12 col-lg-4">
            {/* <h2 class="display-3 fw-bolder mb-4">Bảng giá</h2> */}
            <h2 className="display-3 fw-bolder mb-4">
              <mark className="text-accent bsb-tpl-highlight">Bảng giá</mark>
            </h2>
            <p className="fs-4 mb-4 mb-xl-5">
              Cho phép điều chỉnh linh hoạt nhằm tìm ra gói dịch vụ phù hợp cho hệ thống của bạn.
            </p>
            <a href="#!" className="btn bsb-btn-2xl btn-primary rounded-pill">
              Chi tiết
            </a>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <div className="row gy-4 gy-md-0 gx-xxl-5">
                  <div className="col-12 col-md-6">
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body p-4 p-xxl-5">
                        <h2 className="h4 mb-2">Gói cơ bản</h2>
                        <h4 className="display-3 fw-bold text-primary mb-0">Liên hệ</h4>
                        <p className="text-secondary mb-4">VNĐ / Tháng</p>
                        <ul className="list-group list-group-flush mb-4">
                          <li className="list-group-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span>
                              <strong>-</strong> Tư vấn triển khai
                            </span>
                          </li>
                          <li className="list-group-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span>
                              <strong>-</strong> Ứng cứu sự cố
                            </span>
                          </li>
                          <li className="list-group-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span>
                              <strong>-</strong> Backup dự phòng
                            </span>
                          </li>
                          {/* <li class="list-group-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x text-danger" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
              <span>Free <strong> Tối ưu hạ tầng</strong></span> */}
                          <li className="list-group-item">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x text-danger" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span>
                              -<strong>Hỗ trợ qua chat/email</strong>
                            </span>
                          </li>
                        </ul>
                        <a href="#!" className="btn bsb-btn-2xl btn-accent rounded-pill">
                          Chọn
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="card border-0 border-bottom border-primary shadow-lg pt-md-4 pb-md-4 bsb-pricing-popular">
                      <div className="card-body p-4 p-xxl-5">
                        <h2 className="h4 mb-2">Gói nâng cao</h2>
                        <h4 className="display-3 fw-bold text-primary mb-0">Liên hệ</h4>
                        <p className="text-secondary mb-4">VNĐ / Tháng</p>
                        <ul className="list-group list-group-flush mb-4">
                          <li className="list-group-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span>
                              <strong>-</strong> Tư vấn triển khai
                            </span>
                          </li>
                          <li className="list-group-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span>
                              <strong>-</strong> Ứng cứu sự cố
                            </span>
                          </li>
                          <li className="list-group-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span>
                              <strong>-</strong> Backup dự phòng
                            </span>
                          </li>
                          <li className="list-group-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span>
                              -<strong>Tối ưu hạ tầng</strong>
                            </span>
                          </li>
                          <li className="list-group-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span>
                              -<strong>Hỗ trợ trực tiếp</strong>
                            </span>
                          </li>
                        </ul>
                        <a href="#!" className="btn bsb-btn-2xl btn-accent rounded-pill">
                          Chọn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
