import React from 'react';
import { Airplane, Alarm, ArrowRight, Aspect, Cloud } from '../icons';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card is-bordered has-text-centered is-feature-reveal">
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <div className="card-icon">{icon}</div>
      <div className="card-text">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <a href="#" className="button btn-align-md primary-btn raised">
          Chi tiết
          <ArrowRight className="bi bi-arrow-right-short" />
        </a>
      </div>
    </div>
  );
};

const FEATURES = [
  {
    icon: <Cloud className="bi bi-cloud" />,
    title: 'OCN.Cloud',
    description:
      'Giải pháp điện toán đám mây linh hoạt, giúp doanh nghiệp tối ưu hiệu suất và mở rộng quy mô dễ dàng.',
  },
  {
    icon: <Aspect className="bi bi-aspect-ratio" />,
    title: 'OCN.Firewall',
    description: 'Hệ thống tường lửa mạnh mẽ, bảo vệ dữ liệu và ngăn chặn các mối đe dọa an ninh mạng.',
  },
  {
    icon: <Airplane className="bi bi-airplane-engines" />,
    title: 'Tư vấn triển khai',
    description: 'Hỗ trợ thiết kế, xây dựng và triển khai hạ tầng công nghệ thông tin hiệu quả.',
  },
  {
    icon: <Alarm className="bi bi-alarm" />,
    title: 'Quản lý dịch vụ',
    description: 'Giám sát, bảo trì và tối ưu hệ thống CNTT, đảm bảo hoạt động ổn định và liên tục.',
  },
  {
    icon: <Alarm className="bi bi-alarm" />,
    title: 'Ứng cứu sự cố',
    description: 'Phản ứng nhanh chóng, khắc phục sự cố kịp thời để giảm thiểu gián đoạn hoạt động.',
  },
  {
    icon: <Alarm className="bi bi-alarm" />,
    title: 'Phần cứng & Thiết bị',
    description:
      'Cung cấp và tích hợp các thiết bị công nghệ cao, đảm bảo hiệu suất và độ bền cho hạ tầng CNTT doanh nghiệp.',
  },
];

export const Services = () => {
  return (
    <section id="scrollspyServices" className="section is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">
            Bạn sẽ nhận được <br />
            giải pháp <mark className="text-accent bsb-tpl-highlight">hoàn hảo</mark> với dịch vụ chuyên
            nghiệp của chúng tôi.
          </h2>
        </div>
        <div className="feature-cards content-wrapper">
          <div className="columns">
            {FEATURES.slice(0, 3).map((feature, index) => (
              <div className="column is-4" key={index}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
          <div className="columns">
            {FEATURES.slice(3).map((feature, index) => (
              <div className="column is-4" key={index}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
