import React from 'react';
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation('testimonial');

  const COMMENTS = [
    {
      name: t('comments.1.name'),
      position: 'System Admin',
      img: './img/testimonial/testimonial-img-1.jpg',
      comment: t('comments.1.content'),
    },
    {
      name: t('comments.2.name'),
      position: 'Solution Architect',
      img: './img/testimonial/testimonial-img-2.jpg',
      comment: t('comments.1.content'),
    },
    {
      name: t('comments.3.name'),
      position: 'SOC Manager',
      img: './img/testimonial/testimonial-img-4.jpg',
      comment: t('comments.3.content'),
    },
  ];

  return (
    <section className="section is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">{t('title')}</h2>
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
