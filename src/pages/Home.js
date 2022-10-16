import React, { useContext, useEffect } from 'react'
import { ShopContext } from "../context/shopContext";
import { Link } from 'react-router-dom'


const Home = () => {
    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])



    if (!products) return <div>loading...</div>
    console.log(products)

   return(
    <div>
       {
        products.map((product) => {
           return <Link to={`/products/${product.handle}`} key={product.id} >{product.title}</Link>
        })
       }
    </div>
   )
}

export default Home;