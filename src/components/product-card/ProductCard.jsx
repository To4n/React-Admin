import React from 'react'
import './productcard.css'

const ProductCard = props => {
    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={`../products/${props.sku}_1.png`} alt="product" />
            </div>
            <div className="product-card__name">
                {props.name}
            </div>
            <div className="product-card__reviews">
                {props.reviews}
            </div>
            <div className="product-card__price">
                <span>{`$${props.price}`}</span>
            </div>
        </div>
    )
}

export default ProductCard
