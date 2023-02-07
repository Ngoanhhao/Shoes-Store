import React, { useEffect, useState } from 'react';
import { images } from '../../../../assets/img';

export default function Brand() {
    const logo = [
        {
            name: 'Adidas',
            img: 'https://support.footasylum.co.uk/footasylum/images/Adidas-Logo.svg',
        },
        {
            name: 'Converse',
            img: 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category1.png?v=223',
        },
        {
            name: 'Vans',
            img: 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category2.png?v=223',
        },
        {
            name: 'Puma',
            img: 'https://file.hstatic.net/1000284478/collection/puma_8537367f0598496b930ec213b95bcf5c.png',
        },
        {
            name: 'MLB',
            img: 'https://bizweb.dktcdn.net/100/294/644/themes/737628/assets/logo.png?1663847154556',
        },
    ];

    const [onHover, setHover] = useState(logo[0]);

    return (
        <div className="flex h-[500px]">
            <div className="w-1/2 bg-white flex justify-center items-center">
                <div>
                    <img
                        alt="Brand Logo"
                        width="150"
                        height="150"
                        src={onHover.img}
                    />
                </div>
            </div>
            <div className="w-1/2 bg-black px-20 py-16">
                <h1 className="text-white text-left text-xl">SHOP BY BRAND</h1>
                <ul className="my-10">
                    {logo.map((value, key) => {
                        return (
                            <li
                                key={key}
                                onMouseEnter={() => setHover(value)}
                                className={`${
                                    onHover.name === value.name
                                        ? 'text-white'
                                        : 'text-[#ffffff9c]'
                                }  text-left text-3xl mb-4 cursor-pointer flex`}
                            >
                                {onHover.name === value.name && (
                                    <img
                                        className="mr-3"
                                        src="https://cdn.shopify.com/s/files/1/0588/1443/1414/t/3/assets/red-arrow.svg"
                                        alt=""
                                    />
                                )}
                                {value.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
