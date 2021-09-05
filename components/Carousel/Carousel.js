import { Component } from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css';

export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 10,
      cssEase: 'linear',
      responsive: [
        // {
        //   breakpoint: 1800,
        //   settings: {
        //     slidesToShow: 5,
        //     slidesToScroll: 1,
        //   },
        // },

        // {
        //   breakpoint: 1500,
        //   settings: {
        //     slidesToShow: 5,
        //   },
        // },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div id={'logos'} className={styles.carousel}>
        <h3 className={styles.carousel__title}>Clients</h3>
        <div className={styles.carousel__container}>
          <Slider {...settings}>
            {this.props.tools.map((tool) => (
              <img
                className={styles.carousel__image}
                key={tool}
                src={tool}
                width={140}
                height={80}
                alt={'logo firmy'}
              />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
