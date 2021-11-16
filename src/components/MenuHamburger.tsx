import React from "react";
import { Text, Icon, Stack } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { ButtonCategories } from "./ButtonCategories";

export const MenuHamburger = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="baseline"
      spacing={0}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        flex={1}
        maxWidth={180}
      >
        <Icon
          as={GoLocation}
          width={{ base: 3, lg: 6 }}
          height={{ base: 3, lg: 6 }}
        />
        <Stack
          spacing={0}
          direction={{ base: "row", lg: "column" }}
          lineHeight="14px"
        >
          <Text fontSize="xs" color="blackAlpha.600" marginRight={1}>
            Enviar a
          </Text>
          <Text
            fontSize={{ base: "xs", lg: "14px" }}
            color={{ base: "blackAlpha.600", lg: "blackAlpha.800" }}
          >
            Capital Federal
          </Text>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="baseline"
        flex={1}
        fontSize="sm"
        color="blackAlpha.700"
        spacing={5}
        display={["none", "none", "none", "flex", "flex"]}
      >
        <ButtonCategories />
        <Text _hover={{ opacity: 0.8 }}>Ofertas</Text>
        <Text _hover={{ opacity: 0.8 }}>Historial</Text>
        <Text _hover={{ opacity: 0.8 }}>Supermercado</Text>
        <Text _hover={{ opacity: 0.8 }}>Moda</Text>
        <Text _hover={{ opacity: 0.8 }}>Vender</Text>
        <Text _hover={{ opacity: 0.8 }}>Ayuda</Text>
      </Stack>
      <Stack
        direction="row"
        fontSize="sm"
        spacing={4}
        display={["none", "none", "none", "flex", "flex"]}
      >
        <Text _hover={{ opacity: 0.8 }}>Creá tu cuenta</Text>
        <Text _hover={{ opacity: 0.8 }}>Ingresá</Text>
        <Text _hover={{ opacity: 0.8 }}>Mis compras</Text>
        <Icon
          as={FiShoppingCart}
          width={5}
          height={5}
          _hover={{ opacity: 0.8 }}
        />
      </Stack>
    </Stack>
  );
};
