import React from 'react';
import { BusinessPrice, Check, StarterPrice } from '../icons';
import cn from 'classnames';

const PRICES = [
  {
    title: 'Gói cơ bản',
    features: ['Tư vấn triển khai', 'Ứng cứu sự cố', 'Backup dự phòng', 'Hỗ trợ qua chat/email'],
    hotFeatures: [3],
    icon: <StarterPrice />,
  },
  {
    title: 'Gói nâng cao',
    features: ['Tư vấn triển khai', 'Ứng cứu sự cố', 'Backup dự phòng', 'Tối ưu hạ tầng', 'Hỗ trợ trực tiếp'],
    hotFeatures: [3, 4],
    icon: <BusinessPrice />,
  },
];

interface PriceCardProps {
  title: string;
  features: string[];
  hotFeatures: number[];
  icon: React.ReactNode;
  key: any;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, features, hotFeatures, icon }) => {
  const isBusiness = features.length === 5;

  return (
    <div className="feature-card is-pricing has-text-centered">
      <div>
        <h3 className="plan-name">{title}</h3>
        <div>{icon}</div>
        <div className="title is-2 mb-0">Liên hệ</div>
        <div className="mb-20">VND/tháng</div>
        <div className="pos-left is-f-col">
          {features.map((feature, index) => (
            <p key={index} className={cn({ 'text-primary is-bold': hotFeatures.includes(index) })}>
              <Check /> {feature}
            </p>
          ))}
        </div>
      </div>

      <a
        className={cn('button is-fullwidth is-bold', {
          'primary-btn raised is-bold': isBusiness,
        })}
      >
        Chọn
      </a>
    </div>
  );
};

export const Pricing = () => {
  return (
    <section id="scrollspyPricing" className="section section-feature-grey is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">Bảng giá</h2>
          <h3 className="subtitle is-5 is-muted">
            Cho phép điều chỉnh linh hoạt nhằm tìm ra gói dịch vụ phù hợp cho hệ thống của bạn.
          </h3>
          <div className="divider is-centered" />
        </div>
        <div className="pricing-wrap">
          {PRICES.map((item, index) => (
            <PriceCard {...item} key={index} />
          ))}
        </div>
        <div className="has-text-centered mt-80">
          <button className="button signup-button secondary-btn raised long">Chi tiết</button>
        </div>
      </div>
    </section>
  );
};
