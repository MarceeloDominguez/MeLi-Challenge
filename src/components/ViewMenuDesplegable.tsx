import { Stack, Text, Image, Button, Icon } from "@chakra-ui/react";
import React from "react";
import avatar from "../img/avatar.jpg";
import iconos from "../data/iconMenuDesplegable";

export const ViewMenuDesplegable = () => {
  return (
    <Stack flex={1} spacing={4}>
      <Stack spacing={0}>
        <Stack direction="row" spacing={4} mt={5} ml={5}>
          <Image
            src={avatar}
            width="55px"
            height="55px"
            borderRadius={100}
            alignSelf="center"
          />
          <Stack spacing={0}>
            <Text fontWeight="600">Bienvenido!</Text>
            <Text color="blackAlpha.500" fontSize={14}>
              Ingresa a tu cuenta para ver tus compras, favoritos, etc.
            </Text>
          </Stack>
        </Stack>
        <Stack>
          <Stack direction="row" paddingX={90}>
            <Button
              variant="ghost"
              backgroundColor="#3483fa"
              color="#fff"
              flex={1}
              _hover={{ bg: "#3483fa" }}
              _focus={{ boxShadow: "#3483fa" }}
              colorScheme="none"
            >
              Ingresá
            </Button>
            <Button
              variant="unstyled"
              backgroundColor="#fff"
              flex={1}
              borderWidth={1}
              borderColor="#3483fa"
              _focus={{ boxShadow: "none" }}
              color="#3483fa"
            >
              Creá tu cuenta
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack borderTopWidth={1}>
        <Stack ml={5} spacing={5} marginTop={3}>
          {iconos.map((item) => (
            <Text>
              <Icon mr={4} as={item.icon} /> {item.name}
            </Text>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
