import React from 'react'
import Filter from '../components/filter/Filter'
import ProductCard from '../components/product-card/ProductCard'
import productList from '../assets/JsonData/products-list.json'




const Products = () => {
    return (
        <div>
            <h2 className="page-header">Products</h2>
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card__header">
                            <h3>filters</h3>
                        </div>
                        <div className="card__body">
                            <Filter />
                        </div>
                    </div>
                    
                </div>
                <div className="col-9">
                    <div className="row">
                    {
                        productList.map((item, index) => (
                            <div key={index} className="col-4">
                                <ProductCard
                                key={index}
                                name={item.name}
                                sku={item.sku}
                                price={item.price}
                                reviews={item.reviews}
                                />
                            </div>
                            
                        ))
                    }
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Products
