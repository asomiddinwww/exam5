import React from 'react'
import Showcase from '../pages/Showcaseimg'
import Cards from '../pages/cards1/Cards'
import Blucard from '../pages/blucard/Blucard'
import ProductCard from '../pages/productcard/ProductCard'
import ListsCard from '../pages/Lists/ListsCard'
import ProductCard3 from '../pages/productcard copy/ProductCard'
import Brands from '../pages/brands/Brands'
import Smart from '../pages/smart/Smart'
import Ourblog from '../pages/our/Ourblog'
import Info from '../pages/info/Info'

const Home = () => {
  return (
  <>
    <Showcase/>
    <Cards/>
    <Blucard/>
    <ProductCard/>
    <ListsCard/>
    <ProductCard3/>
    <Brands/>
    <Smart/>
    <Ourblog/>
    <Info/>
  </>
  )
}

export default Home