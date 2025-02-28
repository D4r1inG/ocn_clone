import React from 'react';
import { CloudMoon, Droplet, HeartPulse, OptimizeCost, PersonAdd, Services, Worker } from '../icons';

const ACHIVEMENTS = [
  { title: 'Khách hàng', count: '30+', icon: <PersonAdd /> },
  { title: 'Bài toán đã giải quyết', count: '50+', icon: <HeartPulse /> },
  { title: 'Dự án hoàn thành', count: '10+', icon: <Droplet /> },
  { title: 'Chứng chỉ chứng nhận', count: '3+', icon: <CloudMoon /> },
];

interface AchievementItemProps {
  title: string;
  count: string;
  icon: React.ReactNode;
  key: any;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, count, icon }) => {
  return (
    <div className="column is-3">
      <div className="feature-icon has-text-centered">
        <div className="icon-wrap is-icon-reveal">{icon}</div>
        <h2 className="title is-2">{count}</h2> <p className="is-5 is-muted">{title}</p>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="scrollspyAbout" className="section is-medium section-feature-grey">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">
            Cách chúng tôi xây dựng đội ngũ và sản phẩm nhằm đáp ứng nhu cầu của bạn.
          </h2>
          <h3 className="subtitle is-5 is-muted mt-20">
            Sau đây là những lý do hàng đầu để bạn chọn chúng tôi chăm sóc cho hạ tầng của bạn
          </h3>
          <div className="divider is-centered" />
        </div>
        <div className="columns is-vcentered side-feature mt-80">
          <div className="column is-5 is-offset-1">
            <h3 className="title is-3 mb-10 is-title-reveal">Chi phí tối ưu </h3>
            <p className="subtitle is-5 is-muted">
              Chúng tôi cam kết mang đến giải pháp tiết kiệm tối đa bằng cách tối ưu hóa tài nguyên, giảm
              thiểu lãng phí và áp dụng công nghệ tiên tiến. Nhờ đó, khách hàng có thể đạt hiệu suất cao với
              mức đầu tư hợp lý.
            </p>
          </div>
          <div className="column is-5 pos-right ">
            <OptimizeCost />
          </div>
        </div>

        <div className="columns is-vcentered side-feature mt-80">
          <div className="column is-5 is-offset-1 pos-left">
            <Worker />
          </div>
          <div className="column is-5 is-offset-1">
            <h3 className="title is-3 mb-10 is-title-reveal">Đội ngũ kỹ thuật nhiều kinh nghiệm</h3>
            <p className="subtitle is-5 is-muted">
              Với nhiều năm làm việc trong ngành, đội ngũ kỹ thuật viên của chúng tôi có chuyên môn sâu rộng,
              khả năng xử lý vấn đề nhanh chóng và luôn cập nhật công nghệ mới nhất. Điều này đảm bảo hệ thống
              của khách hàng hoạt động ổn định.
            </p>
          </div>
        </div>

        <div className="columns is-vcentered side-feature mt-80">
          <div className="column is-5 is-offset-1">
            <h3 className="title is-3 mb-10 is-title-reveal">Đa dịch vụ</h3>
            <p className="subtitle is-5 is-muted">
              Chúng tôi cung cấp nhiều dịch vụ từ tư vấn, thiết kế, triển khai đến bảo trì, hỗ trợ kỹ thuật.
              Nhờ đó, khách hàng có thể tìm thấy tất cả giải pháp cần thiết tại một nơi, tiết kiệm thời gian
              và công sức quản lý.
            </p>
          </div>
          <div className="column is-5 pos-right">
            <Services />
          </div>
        </div>
      </div>

      <div className="container mt-60">
        <div className="content-wrapper">
          <div className="columns is-multiline icon-list">
            {ACHIVEMENTS.map((item, index) => (
              <AchievementItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
