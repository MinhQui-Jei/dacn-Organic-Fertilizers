import React from 'react'
import './ExploreProducts.css'
import { menu_list } from '../../assets/assets'


const ExploreProducts = ({ category, setCategory }) => {
    return (
        <div className='explore-products' id='explore-products'>
            <h1>Các loại phân bón </h1>
            <p className='explore-menu-text'>#</p>
            <div className="explore-products-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-products-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreProducts
