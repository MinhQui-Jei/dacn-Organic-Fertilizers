import React, { useState } from 'react'
import './Home.css'
import Header from '../../companents/Header/Header'
import ExploreProducts from '../../companents/ExploreProducts/ExploreProducts'
import ProductDisPlay from '../../companents/ProductDisplay/ProductDisPlay'
import AppDownload from '../../companents/AppDownload/AppDownload'
const Home = () => {

  const [category, setcategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreProducts category={category} setcategory={setcategory} />
      <ProductDisPlay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
