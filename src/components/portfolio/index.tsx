import React, { useEffect } from 'react';
import MiniMasonry from 'minimasonry';

const IMG_METADATA = [
  {
    title: 'Hạ tầng ảo hóa',
    category: 'Computing',
    src: '/img/portfolio/project-landscape-1.jpg',
  },
  {
    title: 'Tường lửa nội bộ',
    category: 'Firewall',
    src: '/img/portfolio/project-portrait-1.jpg',
  },
  {
    title: 'Tu vấn giải pháp',
    category: 'Solution',
    src: '/img/portfolio/project-landscape-2.jpg',
  },
  {
    title: 'Thiết bị IOT',
    category: 'IoT',
    src: '/img/portfolio/project-portrait-2.jpg',
  },
  {
    title: 'Thiết bị Server',
    category: 'Hardware',
    src: '/img/portfolio/project-portrait-3.jpg',
  },
  {
    title: 'Quản lý dịch vụ',
    category: 'Service',
    src: '/img/portfolio/project-portrait-4.jpg',
  },
  {
    title: 'Tư vấn triển khai',
    category: 'Design',
    src: '/img/portfolio/project-landscape-3.jpg',
  },
  {
    title: 'Ứng cứu sự cố',
    category: 'Disaster Recovery',
    src: '/img/portfolio/project-landscape-4.jpg',
  },
];

interface ImageItemProps {
  title: string;
  category: string;
  src: string;
  key: any;
}

const ImageItem: React.FC<ImageItemProps> = ({ title, category, src }) => {
  return (
    <figure
      style={{
        position: 'absolute',
      }}
    >
      <a href="#!">
        <img className="img-fluid bsb-scale-up bsb-hover-scale" src={src} alt="" />
      </a>
      <figcaption>
        <h3 className="title is-2 is-bold light-text">{title}</h3>
        <div className="light-gray-text">{category}</div>
      </figcaption>
    </figure>
  );
};

export const Portfolio = () => {
  useEffect(() => {
    new MiniMasonry({
      container: '.fortfolio-row',
      baseWidth: 400,
      gutter: 10,
    });
  });

  return (
    <section id="scrollspyPortfolio" className="section is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">
            Cùng xem qua các dự án của chúng tôi để <mark className="text-hightlight">bắt đầu</mark> hành
            trình mới của bạn.
          </h2>
          <div className="divider is-centered" />
        </div>

        <div className="content-wrapper">
          <div className="fortfolio-row">
            {IMG_METADATA.map((metadata, index) => (
              <ImageItem key={index} {...metadata} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
