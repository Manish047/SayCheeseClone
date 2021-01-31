import React from 'react';
import classes from './PartnersSlider.module.css';

import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../../components/UI/SliderArrows/SliderArrows';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersSlider = props => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    const imagesUrl = [
        'https://devsaycheese.com/assets/images/home/brand1.png',
        'https://devsaycheese.com/assets/images/home/brand2.png',
        'https://devsaycheese.com/assets/images/home/brand3.png',
        'https://devsaycheese.com/assets/images/home/brand4.png',
        'https://devsaycheese.com/assets/images/home/brand5.png',
        'https://devsaycheese.com/assets/images/home/brand6.png',
        'https://devsaycheese.com/assets/images/home/brand7.png',
        'https://devsaycheese.com/assets/images/home/brand8.png',
        'https://devsaycheese.com/assets/images/home/brand9.png',
        'https://devsaycheese.com/assets/images/home/brand10.png',
    ]

    const images = imagesUrl.map((image, index) => {
        return (
            <div key={index} className={classes.ImageBox}>
                <img src={image} alt={'BrandImage' + index} />
            </div>
        )
    })

    return (
        <div className={classes.PartnersSlider}>
            <h1 className={classes.Title}>Our Strategic Partners</h1>
            <Slider {...settings}>
                {images}
            </Slider>
        </div>
    );
}

export default PartnersSlider;