import Link from 'next/link';
import React from 'react';

export const Main = () => {
  return (
    <main id="main">
      {/* Section - Services */}
      {/* Service 3 - Bootstrap Brain Component */}
      <section id="scrollspyServices" className="py-5 py-xl-8 bsb-section-py-xxl-1">
        <div className="container mb-5 mb-md-6 mb-xl-10">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
              <h2 className="display-3 fw-bolder mb-4">
                Bạn sẽ nhận được <br />
                giải pháp <mark className="text-accent bsb-tpl-highlight">hoàn hảo</mark> với dịch vụ chuyên
                nghiệp của chúng tôi.
              </h2>
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row gy-5 gx-md-4 gy-lg-0 gx-xxl-5 justify-content-center">
            <div className="col-11 col-sm-6 col-lg-4">
              <div className="badge bsb-tpl-bg-yellow text-primary p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="currentColor"
                  className="bi bi-cloud"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.988 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
              </div>
              <h4 className="mb-3">OCN.Cloud</h4>
              <p className="mb-3 text-secondary">
                Giải pháp điện toán đám mây linh hoạt, giúp doanh nghiệp tối ưu hiệu suất và mở rộng quy mô dễ
                dàng.
              </p>
              <a href="#!" className="fw-bold text-decoration-none link-primary">
                Chi tiết
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
            <div className="col-11 col-sm-6 col-lg-4">
              <div className="badge bsb-tpl-bg-green text-primary p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="currentColor"
                  className="bi bi-aspect-ratio"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                  <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
                </svg>
              </div>
              <h4 className="mb-3">OCN.Firewall</h4>
              <p className="mb-3 text-secondary">
                Hệ thống tường lửa mạnh mẽ, bảo vệ dữ liệu và ngăn chặn các mối đe dọa an ninh mạng.
              </p>
              <a href="#!" className="fw-bold text-decoration-none link-primary">
                Chi tiết
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
            <div className="col-11 col-sm-6 col-lg-4">
              <div className="badge bsb-tpl-bg-pink text-primary p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="currentColor"
                  className="bi bi-airplane-engines"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                </svg>
              </div>
              <h4 className="mb-3">Tư vấn triển khai</h4>
              <p className="mb-3 text-secondary">
                Hỗ trợ thiết kế, xây dựng và triển khai hạ tầng công nghệ thông tin hiệu quả.
              </p>
              <a href="#!" className="fw-bold text-decoration-none link-primary">
                Chi tiết
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="row gy-5 gx-md-4 gy-lg-0 gx-xxl-5 justify-content-center">
            <div className="col-11 col-sm-6 col-lg-4">
              <div className="badge bsb-tpl-bg-cyan text-primary p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="currentColor"
                  className="bi bi-alarm"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                </svg>
              </div>
              <h4 className="mb-3">Quản lý dịch vụ</h4>
              <p className="mb-3 text-secondary">
                Giám sát, bảo trì và tối ưu hệ thống CNTT, đảm bảo hoạt động ổn định và liên tục.
              </p>
              <a href="#!" className="fw-bold text-decoration-none link-primary">
                Chi tiết
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
            <div className="col-11 col-sm-6 col-lg-4">
              <div className="badge bsb-tpl-bg-cyan text-primary p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="currentColor"
                  className="bi bi-alarm"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                </svg>
              </div>
              <h4 className="mb-3">Ứng cứu sự cố</h4>
              <p className="mb-3 text-secondary">
                Phản ứng nhanh chóng, khắc phục sự cố kịp thời để giảm thiểu gián đoạn hoạt động.
              </p>
              <a href="#!" className="fw-bold text-decoration-none link-primary">
                Chi tiết
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
            <div className="col-11 col-sm-6 col-lg-4">
              <div className="badge bsb-tpl-bg-cyan text-primary p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="currentColor"
                  className="bi bi-alarm"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                </svg>
              </div>
              <h4 className="mb-3">Phần cứng &amp; Thiết bị</h4>
              <p className="mb-3 text-secondary">
                Cung cấp và tích hợp các thiết bị công nghệ cao, đảm bảo hiệu suất và độ bền cho hạ tầng CNTT
                doanh nghiệp.
              </p>
              <a href="#!" className="fw-bold text-decoration-none link-primary">
                Chi tiết
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action 1 - Bootstrap Brain Component */}
      <section
        className="bsb-cta-1 px-2 bsb-overlay"
        style={{ backgroundImage: 'url("./img/cta/cta-img-1.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-8 col-xl-8 col-xxl-7">
              <h3 className="fs-5 mb-3 text-white text-uppercase">
                <mark className="text-white bsb-tpl-highlight">Mở khóa triển vọng mới</mark>
              </h3>
              <h2 className="display-3 text-white fw-bolder mb-4 pe-xl-5">
                Chúng tôi là một công ty cung cấp các giải pháp hạ tầng công nghệ thông tin theo yêu cầu.
              </h2>
              <a href="#!" className="btn btn-accent bsb-btn-3xl rounded mb-0 text-nowrap">
                Tham gia
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Portfolio */}
      {/* Project 2 - Bootstrap Brain Component */}
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
      {/* Section - About */}
      <section id="scrollspyAbout" className="bsb-tpl-bg-alice-blue py-5 py-xl-8 bsb-section-py-xxl-1">
        {/* FAQ 1 - Bootstrap Brain Component */}
        <div className="container">
          <div className="row gy-5 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img className="img-fluid rounded" loading="lazy" src="./img/about/about-img-1.png" alt="" />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <h2 className="display-3 fw-bolder mb-4">
                    Cách chúng tôi{' '}
                    <mark className="text-accent bsb-tpl-highlight">xây dựng đội ngũ và sản phẩm</mark>
                    nhằm đáp ứng nhu cầu của bạn.
                  </h2>
                  <p className="fs-4 mb-5">
                    Sau đây là những lý do hàng đầu để bạn chọn chúng tôi chăm sóc cho hạ tầng của bạn
                  </p>
                  <div className="accordion accordion-flush" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Chi phí tối ưu
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Chúng tôi cam kết mang đến giải pháp tiết kiệm tối đa bằng cách tối ưu hóa tài
                          nguyên, giảm thiểu lãng phí và áp dụng công nghệ tiên tiến. Nhờ đó, khách hàng có
                          thể đạt hiệu suất cao với mức đầu tư hợp lý.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Đội ngũ kỹ thuật nhiều kinh ngiệm
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Với nhiều năm làm việc trong ngành, đội ngũ kỹ thuật viên của chúng tôi có chuyên
                          môn sâu rộng, khả năng xử lý vấn đề nhanh chóng và luôn cập nhật công nghệ mới nhất.
                          Điều này đảm bảo hệ thống của khách hàng hoạt động ổn định.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Đa dịch vụ
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Chúng tôi cung cấp nhiều dịch vụ từ tư vấn, thiết kế, triển khai đến bảo trì, hỗ trợ
                          kỹ thuật. Nhờ đó, khách hàng có thể tìm thấy tất cả giải pháp cần thiết tại một nơi,
                          tiết kiệm thời gian và công sức quản lý.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fact 1 - Bootstrap Brain Component */}
        <div className="container pt-5 pt-xl-8 bsb-section-pt-xxl-1">
          <div className="row gy-4">
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body text-center p-4 p-xxl-5">
                  <div className="btn btn-primary bsb-btn-circle bsb-btn-circle-4xl pe-none mb-2 bsb-tpl-bg-yellow text-primary border-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      className="bi bi-person-add"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                    </svg>
                  </div>
                  <h3 className="h1 mb-2">30+</h3>
                  <p className="fs-5 mb-0 text-secondary">Khách hàng</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body text-center p-4 p-xxl-5">
                  <div className="btn btn-primary bsb-btn-circle bsb-btn-circle-4xl pe-none mb-2 bsb-tpl-bg-green text-primary border-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      className="bi bi-heart-pulse"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z" />
                      <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z" />
                    </svg>
                  </div>
                  <h3 className="h1 mb-2">50+</h3>
                  <p className="fs-5 mb-0 text-secondary">Bài toán đã giải quyết</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body text-center p-4 p-xxl-5">
                  <div className="btn btn-primary bsb-btn-circle bsb-btn-circle-4xl pe-none mb-2 bsb-tpl-bg-pink text-primary border-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      className="bi bi-droplet"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
                      />
                    </svg>
                  </div>
                  <h3 className="h1 mb-2">10+</h3>
                  <p className="fs-5 mb-0 text-secondary">Dự án hoàn thành</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body text-center p-4 p-xxl-5">
                  <div className="btn btn-primary bsb-btn-circle bsb-btn-circle-4xl pe-none mb-2 bsb-tpl-bg-cyan text-primary border-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      className="bi bi-cloud-moon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                      <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />
                    </svg>
                  </div>
                  <h3 className="h1 mb-2">3+</h3>
                  <p className="fs-5 mb-0 text-secondary">Chứng chỉ chứng nhận</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Team */}
      {/* Team 1 - Bootstrap Brain Component */}
      <section id="scrollspyTeam" className="py-5 py-xl-8 bsb-section-py-xxl-1">
        <div className="container mb-5 mb-md-6 mb-xl-10">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
              <h2 className="display-3 fw-bolder mb-4">
                Đội ngũ <br />
                <mark className="text-accent bsb-tpl-highlight">sáng tạo, nhiều kinh nghiệm</mark>
              </h2>
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-lg-0 gx-xxl-5">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div className="card-body p-0">
                  <figure className="m-0 p-0">
                    <img className="img-fluid" loading="lazy" src="./img/team/team-img-1.jpg" alt="" />
                    <figcaption className="m-0 p-4">
                      <h4 className="mb-1">Zeron</h4>
                      <p className="text-secondary mb-0">Product Manager</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div className="card-body p-0">
                  <figure className="m-0 p-0">
                    <img className="img-fluid" loading="lazy" src="./img/team/team-img-2.jpg" alt="" />
                    <figcaption className="m-0 p-4">
                      <h4 className="mb-1">OceanD</h4>
                      <p className="text-secondary mb-0">Service Manager</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div className="card-body p-0">
                  <figure className="m-0 p-0">
                    <img className="img-fluid" loading="lazy" src="./img/team/team-img-3.jpg" alt="" />
                    <figcaption className="m-0 p-4">
                      <h4 className="mb-1">BunVN</h4>
                      <p className="text-secondary mb-0">Hardware Manager</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div className="card-body p-0">
                  <figure className="m-0 p-0">
                    <img className="img-fluid" loading="lazy" src="./img/team/team-img-4.jpg" alt="" />
                    <figcaption className="m-0 p-4">
                      <h4 className="mb-1">Nastago</h4>
                      <p className="text-secondary mb-0">Network Manager</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Pricing */}
      {/* Pricing 1 - Bootstrap Brain Component */}
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
      {/* Section - Testimonial */}
      {/* Testimonial 3 - Bootstrap Brain Component */}
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
                      <div
                        className="bsb-ratings text-warning mb-3"
                        data-bsb-star={5}
                        data-bsb-star-off={0}
                      />
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
                      <div
                        className="bsb-ratings text-warning mb-3"
                        data-bsb-star={4}
                        data-bsb-star-off={1}
                      />
                      <blockquote className="bsb-blockquote-icon mb-4">
                        Các chuyên gia phân tích kỹ nhu cầu, đưa ra giải pháp phù hợp và hỗ trợ triển khai
                        từng bước. Nhờ đó, hệ thống vận hành trơn tru ngay từ đầu mà không gặp rủi ro lớn.
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
                      <div
                        className="bsb-ratings text-warning mb-3"
                        data-bsb-star={5}
                        data-bsb-star-off={0}
                      />
                      <blockquote className="bsb-blockquote-icon mb-4">
                        Giải pháp firewall được triển khai bài bản, giúp bảo vệ hệ thống khỏi tấn công mạng
                        hiệu quả. Đội ngũ hỗ trợ 24/7, luôn sẵn sàng xử lý sự cố ngay khi cần.
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
      {/* Section - Blog */}
      {/* Blog 2 - Bootstrap Brain Component */}
      <section id="scrollspyBlog" className="bsb-tpl-bg-linen py-5 py-xl-8 bsb-section-py-xxl-1">
        <div className="container">
          <div className="row gy-5 gy-lg-0 align-items-center">
            <div className="col-12 col-lg-4">
              <h2 className="display-3 fw-bolder mb-4">
                <mark className="text-accent bsb-tpl-highlight">Blog</mark>
              </h2>
              <p className="fs-4 mb-4 mb-xl-5">
                Cập nhật các tin tức mới nhất về hạ tầng công nghệ thông tin.
              </p>
              <Link href="/blogs" className="btn bsb-btn-2xl btn-primary rounded-pill">
                Truy cập
              </Link>
            </div>
            <div className="col-12 col-lg-8">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <div className="row gy-4 gy-xxl-5 gx-xxl-5">
                    <div className="col-12 col-lg-6">
                      <article>
                        <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                          <a href="#!">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src="./img/blog/blog-image-1.jpg"
                              alt=""
                            />
                          </a>
                          <figcaption>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              fill="currentColor"
                              className="bi bi-eye text-white bsb-hover-fadeInLeft"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Chi tiết</h4>
                          </figcaption>
                        </figure>
                        <div className="entry-header mb-3">
                          <ul className="entry-meta list-unstyled d-flex mb-2">
                            <li>
                              <a className="link-primary text-decoration-none" href="#!">
                                Kinh doanh
                              </a>
                            </li>
                          </ul>
                          <h2 className="entry-title h4 mb-0">
                            <a className="link-dark text-decoration-none" href="#!">
                              Báo cáo tăng trưởng hạ tầng CNTT năm 2024
                            </a>
                          </h2>
                        </div>
                        <div className="entry-footer">
                          <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="currentColor"
                                  className="bi bi-calendar3"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <span className="ms-2 fs-7">7 Feb 2025</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="currentColor"
                                  className="bi bi-chat-dots"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>
                                <span className="ms-2 fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>
                    <div className="col-12 col-lg-6">
                      <article>
                        <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                          <a href="#!">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src="./img/blog/blog-image-2.jpg"
                              alt=""
                            />
                          </a>
                          <figcaption>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              fill="currentColor"
                              className="bi bi-eye text-white bsb-hover-fadeInLeft"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Chi tiết</h4>
                          </figcaption>
                        </figure>
                        <div className="entry-header mb-3">
                          <ul className="entry-meta list-unstyled d-flex mb-2">
                            <li>
                              <a className="link-primary text-decoration-none" href="#!">
                                Công nghệ
                              </a>
                            </li>
                          </ul>
                          <h2 className="entry-title h4 mb-0">
                            <a className="link-dark text-decoration-none" href="#!">
                              PrivateCloud PublicCloud câu chuyện tối ưu chi phí
                            </a>
                          </h2>
                        </div>
                        <div className="entry-footer">
                          <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="currentColor"
                                  className="bi bi-calendar3"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <span className="ms-2 fs-7">12 Aug 2024</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="currentColor"
                                  className="bi bi-chat-dots"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>
                                <span className="ms-2 fs-7">39</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>
                    <div className="col-12 col-lg-6">
                      <article>
                        <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                          <a href="#!">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src="./img/blog/blog-image-3.jpg"
                              alt=""
                            />
                          </a>
                          <figcaption>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              fill="currentColor"
                              className="bi bi-eye text-white bsb-hover-fadeInLeft"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Chi tiết</h4>
                          </figcaption>
                        </figure>
                        <div className="entry-header mb-3">
                          <ul className="entry-meta list-unstyled d-flex mb-2">
                            <li>
                              <a className="link-primary text-decoration-none" href="#!">
                                Dự phòng
                              </a>
                            </li>
                          </ul>
                          <h2 className="entry-title h4 mb-0">
                            <a className="link-dark text-decoration-none" href="#!">
                              Dự phòng hạ tầng dịch vụ công nghệ thông tin
                            </a>
                          </h2>
                        </div>
                        <div className="entry-footer">
                          <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="currentColor"
                                  className="bi bi-calendar3"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <span className="ms-2 fs-7">21 Dec 2025</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="currentColor"
                                  className="bi bi-chat-dots"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>
                                <span className="ms-2 fs-7">61</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>
                    <div className="col-12 col-lg-6">
                      <article>
                        <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                          <a href="#!">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src="./img/blog/blog-image-4.jpg"
                              alt=""
                            />
                          </a>
                          <figcaption>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              fill="currentColor"
                              className="bi bi-eye text-white bsb-hover-fadeInLeft"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Chi tiết</h4>
                          </figcaption>
                        </figure>
                        <div className="entry-header mb-3">
                          <ul className="entry-meta list-unstyled d-flex mb-2">
                            <li>
                              <a className="link-primary text-decoration-none" href="#!">
                                Mạng máy tính
                              </a>
                            </li>
                          </ul>
                          <h2 className="entry-title h4 mb-0">
                            <a className="link-dark text-decoration-none" href="#!">
                              Rủi ro trong việc quản lý hạ tầng network doanh nghiệp
                            </a>
                          </h2>
                        </div>
                        <div className="entry-footer">
                          <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="currentColor"
                                  className="bi bi-calendar3"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <span className="ms-2 fs-7">21 Feb 2025</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="currentColor"
                                  className="bi bi-chat-dots"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>
                                <span className="ms-2 fs-7">61</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Contact */}
      {/* Contact 2 - Bootstrap Brain Component */}
      <section id="scrollspyContact" className="py-5 py-xl-8 bsb-section-py-xxl-1">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src="./img/contact/contact-img-1.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">Liên hệ</h2>
                  <p className="lead fs-4 text-secondary mb-5">
                    Chúng tôi luôn tìm kiếm cơ hội để hợp tác, giúp đỡ khách hàng. Nếu bạn quan tâm đến việc
                    làm việc với chúng tôi, vui lòng liên hệ theo một trong những cách sau.
                  </p>
                  <div className="d-flex mb-4">
                    <div className="me-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-geo"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-3">Địa chỉ</h4>
                      <address className="mb-0 text-secondary">
                        Tầng 4, Tòa N01-T2, Khu Ngoại Giao Đoàn, Phường Xuân Tảo, Quận Bắc Từ Liêm, Thành phố
                        Hà Nội, Việt Nam
                      </address>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div className="me-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-telephone-outbound"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-3">Số điện thoại</h4>
                      <p className="mb-0">
                        <a className="link-secondary text-decoration-none" href="tel:+15057922430">
                          (+84)376332287
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-envelope-at"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-3">Email</h4>
                      <p>
                        <a className="link-secondary text-decoration-none" href="mailto:info@ocn.com.vn">
                          info@ocn.com.vn
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
