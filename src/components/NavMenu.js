import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ShopContext } from "../context/shopContext";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Box,
    Text,
    Image,
    SimpleGrid,
    VStack
 } from "@chakra-ui/react";

const NavMenu = () => {
     const {isMenuOpen, closeMenu} = useContext(ShopContext)

    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack p="2rem">
                            <Link to="/">About Us</Link>
                            <Link to="/">Learn More</Link>
                            <Link to="/">Sustainability</Link>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter textAlign="center">
                        <Text w="100%">Copyright SAZwerling 2022</Text>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>

        </Drawer>
    )
}

export default NavMenu;