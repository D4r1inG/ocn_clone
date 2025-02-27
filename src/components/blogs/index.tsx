import Link from 'next/link';
import React from 'react';

export const Blogs = () => {
  return (
    <section id="scrollspyBlog" className="bsb-tpl-bg-linen py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-center">
          <div className="col-12 col-lg-4">
            <h2 className="display-3 fw-bolder mb-4">
              <mark className="text-accent bsb-tpl-highlight">Blog</mark>
            </h2>
            <p className="fs-4 mb-4 mb-xl-5">Cập nhật các tin tức mới nhất về hạ tầng công nghệ thông tin.</p>
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
  );
};
