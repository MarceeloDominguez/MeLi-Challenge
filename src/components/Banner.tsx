import { Flex, Center, Square, Text, Stack, Icon } from "@chakra-ui/react";
import React from "react";
import { IoBrowsersOutline } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { FaHandHoldingUsd } from "react-icons/fa";

export const Banner = () => {
  return (
    <Stack my={10} alignItems="center">
      <Stack boxShadow="md" width={{ base: 785, lg: 1190 }}>
        <Flex color="#000">
          <Center flex="1" bg="#fff" borderLeftRadius={3} px={{ base: "5px" }}>
            <Icon
              as={IoBrowsersOutline}
              width={10}
              height={10}
              color="#3483fa"
              borderWidth={1}
              borderRadius={20}
              p={2}
            />
            <Stack ml={2}>
              <Text>Tarjeta de crédito</Text>
              <Text color="#3483fa" _hover={{ opacity: 0.8 }}>
                Ver promociones bancarias
              </Text>
            </Stack>
          </Center>
          <Square flex="1" bg="#fff" size="90px">
            <Icon
              as={IoBrowsersOutline}
              width={10}
              height={10}
              color="#3483fa"
              borderWidth={1}
              borderRadius={20}
              p={2}
            />
            <Stack ml={2}>
              <Text>Tarjeta de débito</Text>
              <Text color="#3483fa" _hover={{ opacity: 0.8 }}>
                Ver más
              </Text>
            </Stack>
          </Square>
          <Center
            flex="1"
            bg="#fff"
            borderRightWidth={1}
            borderRightColor="#ccc"
          >
            <Icon
              as={FaHandHoldingUsd}
              width={10}
              height={10}
              color="#3483fa"
              borderWidth={1}
              borderRadius={20}
              p={2}
            />
            <Stack ml={2}>
              <Text>Cuotas sin tarjeta</Text>
              <Text color="#3483fa" _hover={{ opacity: 0.8 }}>
                Conocé Mercado Crédito
              </Text>
            </Stack>
          </Center>
          <Center bg="#fff" borderRightRadius={3} w="100px">
            <Icon
              as={IoMdAddCircle}
              width={10}
              height={10}
              color="#3483fa"
              borderWidth={1}
              borderRadius={20}
              p={2}
            />
          </Center>
        </Flex>
      </Stack>
    </Stack>
  );
};
