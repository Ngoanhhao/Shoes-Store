import React, { useState } from 'react';
import '../../style/Product-card.scss';

export default function ProductCard({ imgSrc, title, name, price }) {
    var [onHover, setOnhover] = useState(false);
    return (
        <div
            className="px-2 card-item"
            onMouseEnter={() => setOnhover(true)}
            onMouseLeave={() => setOnhover(false)}
        >
            <div className="overflow-hidden">
                <img
                    className={`w-full transition-all ${
                        onHover ? 'scale' : ''
                    }`}
                    src={imgSrc}
                    alt={name}
                />
            </div>
            <div className="flex justify-between my-1">
                <h1 className="font-medium">{title}</h1>
                <p className="text-sm">{price}</p>
            </div>
            <p className="text-left text-sm">{name}</p>
        </div>
    );
}
