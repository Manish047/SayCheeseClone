import React from 'react';
import classes from './BenefitsSlider.module.css';

import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../../components/UI/SliderArrows/SliderArrows';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BenefitsSlider = props => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    };

    const imagesUrl = [
        'https://devsaycheese.com/assets/images/about/howdowedoit/1.jpg',
        'https://devsaycheese.com/assets/images/about/howdowedoit/2.png',
        'https://devsaycheese.com/assets/images/about/howdowedoit/3.png',
        'https://devsaycheese.com/assets/images/about/howdowedoit/4.png',
        'https://devsaycheese.com/assets/images/about/howdowedoit/5.png',
        'https://devsaycheese.com/assets/images/about/howdowedoit/6.jpg',
        'https://devsaycheese.com/assets/images/about/howdowedoit/7.png',
        'https://devsaycheese.com/assets/images/about/howdowedoit/8.png',
    ]

    const images = imagesUrl.map((image, index) => {
        return (
            <div key={index} className={classes.ImageBox}>
                <img src={image} alt={'HowWeDoIt' + index} />
            </div>
        )
    })

    return (
        <div className={classes.BenefitsSlider}>
            <h1 className={classes.Title}>Why Say Cheese?</h1>
            <Slider {...settings}>
                {images}
            </Slider>
        </div>
    );
}

export default BenefitsSlider;