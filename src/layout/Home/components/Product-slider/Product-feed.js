import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../../style/slider.scss';
import ProductCard from './Product-card';
import product from '../../../../api-service/product-categories';
import "../../style/Product-feed.scss"

export default function ProductFeed({ category = 1 }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
    };

    var [dataCategory, setCategory] = useState([]);

    useEffect(() => {
        const Fetch = async () => {
            const data = await product(category);
            setCategory(data);
        };
        Fetch();
    }, []);

    function truncateString(value, maxLength) {
        var returnedValue = value;
        if (returnedValue.length > maxLength) {
            returnedValue = returnedValue.substring(0, maxLength) + '...';
        }
        return returnedValue;
    }

    return (
        <div className="px-10 py-20">
            <div className='flex justify-between mb-6'>
              <h1 className='text-3xl font-medium'>{dataCategory.name} !</h1>
              <h1 className='font-medium shopNow'>Shop now!</h1>
            </div>
            <Slider {...settings}>
                {dataCategory.products &&
                    dataCategory.products.map((value) => {
                        return (
                            <ProductCard
                                key={value.id}
                                imgSrc={value.image}
                                title={dataCategory.name}
                                name={truncateString(value.title, 45)}
                                price={`${new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(value.originalPrice)}`}
                            />
                        );
                    })}
            </Slider>
        </div>
    );
}
