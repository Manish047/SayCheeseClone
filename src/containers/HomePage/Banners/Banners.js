import React from 'react';
import classes from './Banners.module.css';

import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../../components/UI/SliderArrows/SliderArrows';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './Banner/Banner';

const Banners = props => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow inside/>,
        prevArrow: <PrevArrow inside />,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    const bannerData = [
        { id: 1, title: "Are you happy with your career?", subTitle: "Say Cheese offers personalized solutions to build a fulfilling career", img: "https://devsaycheese.com/assets/images/home/new/banner2.webp" },
        { id: 2, title: "How is your physical, mental and emotional Health?", subTitle: "We offer a holistic and balanced approach.", img: "https://devsaycheese.com/assets/images/home/new/banner3.webp" },
        { id: 3, title: "Are your relationships harmonial?", subTitle: "Join our community and cherish trusted relationships.", img: "https://devsaycheese.com/assets/images/home/new/banner4.webp" },
    ];

    let banners = bannerData.map(banner => {
        return <Banner key={banner.id} title={banner.title} subTitle={banner.subTitle} img={banner.img} />
    })

    return (
        <div className={classes.Carousel}>
            <Slider {...settings}>
                {banners}
            </Slider>
        </div>
    );
}

export default Banners;