import React, { useRef } from "react";
import { Stack, Text, Image, Box, Button, Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import "../css/Carousel.css";
import { Products } from "../interface/productsInterface";

interface Props {
  title: string;
  products: Products[];
}

export const HorizontalSlider = ({ title, products }: Props) => {
  const carousel = useRef<any>(null);

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  return (
    <>
      <Stack alignSelf="center">
        <Stack
          direction="row"
          width={{ base: 800, lg: 1200 }}
          alignItems="baseline"
        >
          <Text
            color="gray.500"
            fontSize={{ base: 24, lg: 26 }}
            letterSpacing={1}
            px={2}
          >
            {title}
          </Text>

          <Text
            color="#3483fa"
            _hover={{ opacity: 0.8 }}
            transition=".2s"
            textAlign="center"
          >
            Ver historial
          </Text>
        </Stack>
      </Stack>

      <Stack alignItems="center">
        <Flex
          width={{ base: 800, lg: 1200 }}
          overflowX="auto"
          marginBottom={15}
          className="scrollBar"
          ref={carousel}
          zIndex={1}
        >
          {products.map((item, i) => (
            <Stack key={i}>
              <Link to={`/DetailsScreen/${item.id}`}>
                <Stack
                  _hover={{ boxShadow: "lg" }}
                  transition=".2s"
                  margin={2}
                  alignItems="center"
                  spacing={0}
                  backgroundColor="#fff"
                >
                  <Image
                    src={item.image}
                    objectFit="contain"
                    width={224}
                    height={224}
                  />
                  <Box
                    fontWeight="semibold"
                    lineHeight="tight"
                    backgroundColor="#fff"
                    width={{ base: 100, lg: 224 }}
                    borderTopWidth={0.5}
                    p={2}
                    fontSize={{ base: 14, lg: 20 }}
                  >
                    {currencyFormatter.format(item.price, { code: "USD" })}
                  </Box>
                </Stack>
              </Link>
            </Stack>
          ))}
        </Flex>

        <Stack position="relative" bottom="200px">
          <Flex width={{ base: 850, lg: 1250 }} justifyContent="space-between">
            <Button
              variant="ghost"
              backgroundColor="#fff"
              color="#3483fa"
              opacity={0}
              _hover={{ bg: "#fff", opacity: 1 }}
              _focus={{ boxShadow: "#fff" }}
              colorScheme="none"
              boxShadow="lg"
              w="60px"
              h="60px"
              borderRadius="50px"
              p="10px"
              zIndex={1}
              onClick={handleLeftClick}
            >
              <Icon as={IoIosArrowBack} />
            </Button>

            <Button
              variant="ghost"
              backgroundColor="#fff"
              color="#3483fa"
              opacity={0}
              _hover={{ bg: "#fff", opacity: 1 }}
              _focus={{ boxShadow: "#fff" }}
              colorScheme="none"
              boxShadow="lg"
              w="60px"
              h="60px"
              borderRadius="50px"
              p="10px"
              zIndex={1}
              onClick={handleRightClick}
            >
              <Icon as={IoIosArrowForward} />
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};
