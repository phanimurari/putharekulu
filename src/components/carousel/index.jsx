import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './index.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const staticImages = [
    'https://res.cloudinary.com/imphanimurari/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1706278031/putharekulu/carousel3_yox5ab.avif',
    'https://res.cloudinary.com/imphanimurari/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1706278031/putharekulu/carousel2_rpdjw2.jpg',
  ];

  const [offersList, setOffersList] = useState([]);

  useEffect(() => {
    setOffersList(staticImages.map((imageUrl, index) => ({ id: index + 1, imageUrl })));
  }, []); // Run once on mount

  const renderCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };

    return (
      <ul className="carousel-container">
        <Slider {...settings} className="carousal">
          {offersList.map(eachImage => (
            <li key={eachImage.id}>
              <img
                src={eachImage.imageUrl}
                alt="offer"
                className="carousal-item-image"
              />
            </li>
          ))}
        </Slider>
      </ul>
    );
  };

  return renderCarousel();
};

export default Carousel;
