import Link from 'next/link';
import React from 'react';
import { Services } from '../services';
import { Portfolio } from '../portfolio';
import { About } from '../about';
import { Team } from '../team';
import { Pricing } from '../pricing';
import { Testimonial } from '../testimonial';
import { Blogs } from '../blogs';
import { Contact } from '../contact';

export const Main = () => {
  return (
    <main id="main">
      <Services />

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
      <Portfolio />
      <About />
      <Team />
      <Pricing />
      <Testimonial />
      <Blogs />
      <Contact />
    </main>
  );
};
