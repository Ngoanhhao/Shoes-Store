import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CategoriesCard from './Categories-card';
import { images } from '../../../../assets/img/index';
import '../../style/slider.scss';

export default function CategoriesFeed() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
    };

    const categories = [
        { id: 1, name: 'Converse' },
        { id: 2, name: 'Vans' },
        { id: 3, name: 'Adidas' },
        { id: 4, name: 'Puma' },
        { id: 5, name: 'MLB' },
    ];

    return (
        <div className="bg-[#f4f2f0] py-20 px-5">
            <h1 className="text-left text-4xl font-medium">
                Featured Collections
            </h1>
            <Slider {...settings} className="">
                {categories.map((value) => {
                    return (
                        <CategoriesCard
                            src={images.Categories[value.name]}
                            key={value.id}
                            alt={value.name}
                            title={value.name}
                        />
                    );
                })}
            </Slider>
        </div>
    );
}
