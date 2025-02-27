import React from 'react';

export const Team = () => {
  return (
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
  );
};
