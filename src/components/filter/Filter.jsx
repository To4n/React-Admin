import React from 'react'
import './filter.css'

const filterOptions = {
    collections : [
        "shoes",
        "tshirt",
        "hoodies"
    ],
    price: {min: 0, max: 500},
    reviews: {star: 0},
    brands : [
        "adidas",
        "nike",
        "puma",
        "hollister",
        "eagle"
    ]

}

const Filter = props => {
    return (
        <div className="product-filter">
            <div className="product-filter__select">
                    <h4>Collections</h4>
                    <ul className="filter-list">
                    {
                        filterOptions.collections.map((item, index) => (
                            <li key={index} >
                                <div className="filter-list__option" >
                                    <i className="bx bx-check"></i>
                                </div>
                                    <span>{item}</span>
                            </li>
                        ))
                    }
                    </ul>
            </div>
            <div className="product-filter__select">
                        <h4>Price</h4>
                        <div className="filter-list">
                            <input type="range" min={0} max={999}/>
                        </div>
                        
            </div>
            <div className="product-filter__select">
                        <h4>Stars</h4>
                           <div className="filter-list__star">
                               {
                                   [...Array(5)].map((item, index) => (
                                       <i className="bx bx-star"></i>
                                    
                                   ))
                               }
                           </div>
            </div>
            <div className="product-filter__select">
                    <h4>Brands</h4>
                    <ul className="filter-list">
                        {
                            filterOptions.brands.map((item, index) => (
                                <li key={index}>
                                    <div className="filter-list__option" >
                                        <i className="bx bx-check"></i>
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))
                        }
                    </ul>
            </div>
            
        </div>
    )
}

export default Filter
