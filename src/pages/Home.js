import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

const Home = () => {
   const { fetchAllProducts, products } = useContext(ShopContext);

   useEffect(() => {
      fetchAllProducts();
   }, [fetchAllProducts]);

   if (!products) return <div>loading...</div>;
   return (
      <Box>
         <Grid templateColumns="repeat(3, 1fr)">
            {products.map((product) => {
               console.log(product.variants[0].price.amount);
               return (
                  <Link to={`/products/${product.handle}`} key={product.id}>
                     <Box _hover={{ opacity: '80%', }} textAlign="center">
                        <Image
                           src={product.images[0].src}
                           alt={product.images[0].altText}
                        />
                        <Text>{product.title}</Text>
                        <Text>{product.variants[0].price.amount}</Text>
                     </Box>
                  </Link>
               );
            })}
         </Grid>
      </Box>
   );
};

export default Home;
