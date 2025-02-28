import React from 'react';

const COMMENTS = [
  {
    name: 'Nguyễn Văn Hùng',
    position: 'System Admin',
    img: './img/testimonial/testimonial-img-1.jpg',
    comment:
      'Hệ thống linh hoạt và tiết kiệm chi phí đáng kể. Đội ngũ kỹ thuật hỗ trợ nhanh chóng, giải quyết sự cố kịp thời.',
  },
  {
    name: 'Trần Minh Anh',
    position: 'Solution Architect',
    img: './img/testimonial/testimonial-img-2.jpg',
    comment:
      'Các chuyên gia phân tích kỹ nhu cầu, đưa ra giải pháp phù hợp và hỗ trợ triển khai từng bước. Nhờ đó, hệ thống vận hành trơn tru ngay từ đầu mà không gặp rủi ro lớn.',
  },
  {
    name: 'Lê Quốc Bảo',
    position: 'SOC Manager',
    img: './img/testimonial/testimonial-img-4.jpg',
    comment:
      'Giải pháp firewall được triển khai bài bản, giúp bảo vệ hệ thống khỏi tấn công mạng hiệu quả. Đội ngũ hỗ trợ 24/7, luôn sẵn sàng xử lý sự cố ngay khi cần.',
  },
];

const Comment = ({ name, position, img, comment }) => {
  return (
    <figure className="testimonial">
      <blockquote>{comment}</blockquote>
      <div className="author">
        <img src={img} alt="" />
        <div>
          <h5>{name}</h5> <span>{position}</span>
        </div>
      </div>
    </figure>
  );
};

export const Testimonial = () => {
  return (
    <section className="section is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">Sản phẩm của chúng tôi xây dựng dựa trên trải nghiệm của khách hàng</h2>
          <div className="divider is-centered" />
        </div>
        <div className="testimonials content-wrapper">
          <div className="columns is-vcentered">
            {COMMENTS.map((comment, index) => (
              <div key={index} className="column is-4">
                <Comment {...comment} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
