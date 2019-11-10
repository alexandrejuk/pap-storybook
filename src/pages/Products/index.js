import React, { useState, useEffect } from 'react'
import ServicesRequest from '../../services/request'
import ProductsContainer from '../../containers/Products'
import { addItemToCard } from '../../components/actions/cart'

const Services = new ServicesRequest()

const Products = ({
  addCartItem,
}) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const response = Services.getProducts()
    setProducts(response)
  }, [])
  return (
    <ProductsContainer
      products={products}
      addCartItem={addCartItem}
    />
  )
}

const mapDispatchToProps= (dispatch)=>{
  return {
    addCartItem: id => dispatch(addItemToCard(id)),
    getAllProducts: products => dispatch(getProducts(products)),
  }
}


export default connect(null, mapDispatchToProps)(Products)
