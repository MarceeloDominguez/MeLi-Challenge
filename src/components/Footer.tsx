import React from "react";
import { Stack, Image, Text, Flex, Center } from "@chakra-ui/react";
import payment from "../img/payment.svg";
import shipping from "../img/shipping.svg";
import protecte from "../img/protected.svg";

export const Footer = () => {
  return (
    <>
      <Stack alignItems="center" backgroundColor="#fff">
        <Flex pt="70px" pb="25px" width={{ base: 800, lg: 1150 }}>
          <Center flex={1} borderRightWidth={1}>
            <Stack alignItems="center" px="30px">
              <Image src={payment} w="66px" h="46px" justifySelf="center" />
              <Text>Elegí cómo pagar</Text>
              <Text textAlign="center" fontSize="14px" color="rgba(0,0,0,.5)">
                Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin
                tarjeta con Mercado Crédito.
              </Text>
              <Text fontSize="14px" color="#3483fa" _hover={{ opacity: 0.8 }}>
                Cómo pagar tus compras
              </Text>
            </Stack>
          </Center>
          <Center flex={1} borderRightWidth={1}>
            <Stack alignItems="center" px="30px">
              <Image src={shipping} w="66px" h="46px" justifySelf="center" />
              <Text>Envío gratis desde $ 3.500</Text>
              <Text textAlign="center" fontSize="14px" color="rgba(0,0,0,.5)">
                Solo por estar registrado en Mercado Libre tenés envíos gratis
                en miles de productos. Es un beneficio de Mercado Puntos.
              </Text>
              <Text fontSize="14px" color="#3483fa" _hover={{ opacity: 0.8 }}>
                Conocé más sobre este beneficio
              </Text>
            </Stack>
          </Center>
          <Center flex={1}>
            <Stack alignItems="center" px="30px">
              <Image src={protecte} w="66px" h="46px" justifySelf="center" />
              <Text>Seguridad, de principio a fin</Text>
              <Text textAlign="center" fontSize="14px" color="rgba(0,0,0,.5)">
                ¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no
                puedas hacer, porque estás siempre protegido.
              </Text>
              <Text fontSize="14px" color="#3483fa" _hover={{ opacity: 0.8 }}>
                Cómo te protegemos
              </Text>
            </Stack>
          </Center>
        </Flex>
      </Stack>
      <Stack alignItems="center" backgroundColor="#fff">
        <Flex pb="50px" pt="25px" width={{ base: 800, lg: 1150 }}>
          <Center flex={1} borderWidth={1} borderRadius="8px" mx="10px">
            <Stack alignItems="center" lineHeight="10px" py="10px">
              <Text fontSize="14px" color="rgba(0,0,0,.5)">
                Botón de arrepentimiento
              </Text>
              <Text fontSize="14px" color="#3483fa" _hover={{ opacity: 0.8 }}>
                Cancelar una compra
              </Text>
              <Text fontSize="14px" color="#3483fa" _hover={{ opacity: 0.8 }}>
                Cancelar una suscripción
              </Text>
            </Stack>
          </Center>
          <Center flex={1} borderWidth={1} borderRadius="8px" mx="10px">
            <Stack alignItems="center" lineHeight="12px" py="10px">
              <Text fontSize="14px" color="rgba(0,0,0,.5)">
                Conocé las normas que aplican cuando comprás
              </Text>
              <Text fontSize="14px" color="#3483fa" _hover={{ opacity: 0.8 }}>
                Ver contratos de adhesión - Ley N.º 24.240 de Defensa del
                Consumidor
              </Text>
            </Stack>
          </Center>
        </Flex>
      </Stack>
    </>
  );
};
