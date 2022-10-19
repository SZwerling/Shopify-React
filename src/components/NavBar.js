import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Flex, Icon, Image, Text, Box, Badge } from "@chakra-ui/react";
import { MdOutlineMenuBook } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const NavBar = () => {
   const { openCart, openMenu, checkout } = useContext(ShopContext);
   return (
      <Flex
         borderBottom="0.25pt white solid"
         backgroundColor="#FFA8E2"
         flexDir="row"
         justifyContent="space-between"
         alignItems="center"
         p="2rem"
      >
         <Icon
            cursor="pointer"
            w={30}
            h={30}
            fill="white"
            as={MdOutlineMenuBook}
            onClick={() => openMenu()}
         ></Icon>
         <Link to="/">
            <Image
               src={
                  "https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
               }
            />
         </Link>
         <Box>
            <Icon
               cursor="pointer"
               w={30}
               h={30}
               fill="white"
               as={AiOutlineShoppingCart}
               onClick={() => openCart()}
            ></Icon>
            <Badge backgroundColor="#FF38BD" borderRadius="50%">{checkout.lineItems?.length}</Badge>
         </Box>
      </Flex>
   );
};
