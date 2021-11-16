import React from "react";
import { MenuButton, Menu, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

export const ButtonCategories = () => {
  return (
    <Menu closeOnBlur autoSelect={false}>
      <MenuButton
        px={0}
        py={0}
        _hover={{ bg: "none", opacity: 0.8 }}
        _focus={{ boxShadow: "none" }}
        variant="ghost"
        _expanded={{ bg: "none" }}
        as={Button}
        rightIcon={<FiChevronDown />}
        color="blackAlpha.700"
        fontWeight="normal"
        colorScheme="none"
        fontSize="14px"
      >
        Categorías
      </MenuButton>
      <MenuList
        backgroundColor="#333"
        color="#fff"
        borderRadius={0}
        borderColor="#333"
      >
        <MenuItem _hover={{ bg: "#3483fa" }}>Vehículos</MenuItem>
        <MenuItem _hover={{ bg: "#3483fa" }}>Inmuebles</MenuItem>
        <MenuItem _hover={{ bg: "#3483fa" }}>Tecnología</MenuItem>
        <MenuItem _hover={{ bg: "#3483fa" }}>Hogar y Muebles</MenuItem>
        <MenuItem _hover={{ bg: "#3483fa" }}>Electrodomésticos</MenuItem>
        <MenuItem _hover={{ bg: "#3483fa" }}>Herramientas</MenuItem>
        <MenuItem _hover={{ bg: "#3483fa" }}>Construcción</MenuItem>
        <MenuItem _hover={{ bg: "#3483fa" }}>Deportes y Fitness</MenuItem>
      </MenuList>
    </Menu>
  );
};
