import React from 'react';
import '../../style/Categories-card.scss';

export default function CategoriesCard({ src, title }) {
    return (
        <div className="p-2">
            <div className="categories-container">
                <img className="" src={src} alt={title} />
                <div className="img-btn-container">
                    <p className="img-btn absolute z-20 left-2 bottom-2 text-white">
                        Shop now!
                        <span />
                    </p>
                </div>
                <p
                    className="absolute z-20 left-1/2 top-1/2 text-white text-3xl"
                    style={{ transform: 'translateX(-50%) translateY(-50%)' }}
                >
                    {title}
                </p>
            </div>
        </div>
    );
}
