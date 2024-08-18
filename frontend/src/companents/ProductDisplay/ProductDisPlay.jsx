import React, { useContext } from 'react'
import './ProductDisPlay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'
import { assets } from '../../assets/assets'

const ProductDisPlay = ({ category }) => {


    const { product_list } = useContext(StoreContext)

    return (
        <div className='product-display' id='product-display'>
            <h2>Top các sản phẩm bán chạy</h2>
            <div className="product-display-list">
                {product_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }

                })}
            </div>
        </div>
    )
}

export default ProductDisPlay
