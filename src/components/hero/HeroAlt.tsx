import Link from 'next/link';
import React from 'react';

export const HeroAlt = () => {
  return (
    <section className="hero-alt" style={{ backgroundImage: 'url("./img/cta/cta-img-1.jpg")' }}>
      <div className="hero-alt-overlay" />
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-5 landing-caption">
            <span className="subtitle is-5 light-gray-text text-hightlight">Mở khóa triển vọng mới</span>
            <h1 className="title is-1 is-bold is-spaced light-text mt-20 mb-20">
              Chúng tôi là một công ty cung cấp các giải pháp hạ tầng công nghệ thông tin theo yêu cầu.
            </h1>

            <Link href="/" className="navbar-item">
              <span type="button" className="button signup-button secondary-btn raised">
                Tham gia
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
