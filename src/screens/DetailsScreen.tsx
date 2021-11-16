import React, { useState } from "react";
import currencyFormatter from "currency-formatter";
import { useParams } from "react-router-dom";
import { Stack, Image, Text, Flex, Box, Icon } from "@chakra-ui/react";
import data from "../data/data";
import { Navbar } from "../components/Navbar";
import { FiTruck } from "react-icons/fi";
import { IoArrowUndo } from "react-icons/all";
import { GiTrophyCup } from "react-icons/gi";
import { BiCheckShield } from "react-icons/bi";
import { GiAchievement } from "react-icons/gi";
import { Buttons } from "../components/Buttons";
import { QuestionsAnswers } from "../components/QuestionsAnswers";
import { Products } from "../interface/productsInterface";

export const DetailsScreen = () => {
  const { id } = useParams<any>();

  const product = data.find((item) => String(item.id) === String(id));

  const [selectImg, setSelectImg] = useState(product?.thumbnails[0]);

  const obj: any = {
    title: product?.title,
    price: product?.price,
    numeroCuotas: product?.numeroCuotas,
    precioCuotas: product?.precioCuotas,
    precioAnterior: product?.precioAnterior,
    descuento: product?.descuento,
    unidadesDisponibles: product?.unidadesDisponibles,
    color: product?.color,
    mercadoPuntos: product?.mercadoPuntos,
    description: product?.description,
    name: product?.name,
  };

  const {
    title,
    price,
    numeroCuotas,
    precioCuotas,
    precioAnterior,
    descuento,
    unidadesDisponibles,
    color,
    mercadoPuntos,
    description,
    name,
  }: Products = obj;

  return (
    <>
      <Stack overflow="hidden" spacing={0}>
        <Navbar />
        <Stack alignItems="center">
          <Flex
            width={{ base: 800, lg: 1180 }}
            mt="10px"
            backgroundColor="#fff"
            p={3}
            borderTopRadius="5px"
            boxShadow="lg"
          >
            <Box>
              <Stack m={3}>
                {product?.thumbnails.map((img, i) => (
                  <Stack
                    key={i}
                    borderWidth={2}
                    borderColor={selectImg === img ? "#3483fa" : ""}
                    borderRadius={4}
                  >
                    <Image
                      src={img}
                      w={"50px"}
                      h={"50px"}
                      objectFit="contain"
                      onClick={() => setSelectImg(img)}
                    />
                  </Stack>
                ))}
              </Stack>
            </Box>
            <Box w={{ base: "420px", lg: "700px" }}>
              <Stack m={3}>
                <Stack borderRadius={1} alignItems="center">
                  <Image src={selectImg} objectFit="contain" h="400px" />
                </Stack>
                <Stack borderTopWidth={1} py="20px">
                  <Text fontSize={{ base: 24, lg: 26 }}>Descripción</Text>
                  <Text fontSize="18px" color="rgba(0,0,0,.5)">
                    {description}
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Box borderWidth={1} borderRadius="6px" flex={1}>
              <Stack p={3} spacing={5}>
                <Text
                  fontSize="22px"
                  fontWeight="600"
                  lineHeight={1.18}
                  color="blackAlpha.900"
                >
                  {title}
                </Text>
                <Stack>
                  {precioAnterior && (
                    <Text textDecorationLine="line-through" color="gray.500">
                      {currencyFormatter.format(precioAnterior, {
                        code: "USD",
                      })}
                    </Text>
                  )}
                  <Stack direction="row" alignItems="center">
                    <Text
                      fontSize="36px"
                      fontWeight="400"
                      color="blackAlpha.800"
                    >
                      {currencyFormatter.format(price, { code: "USD" })}{" "}
                    </Text>
                    {descuento && (
                      <Text fontSize="14px" color="#00a650">
                        {descuento}% OFF
                      </Text>
                    )}
                  </Stack>
                  <Text>
                    en{" "}
                    <b style={{ color: "#00a650", fontWeight: 400 }}>
                      {numeroCuotas}x{" "}
                      {currencyFormatter.format(precioCuotas, { code: "USD" })}{" "}
                      sin interés
                    </b>
                  </Text>

                  <Text
                    fontSize="14px"
                    color="#3483fa"
                    _hover={{ opacity: 0.9 }}
                  >
                    Ver los medios de pago
                  </Text>
                </Stack>

                <Stack direction="row">
                  <Icon as={FiTruck} m="5px" color="#00a650" />
                  <Stack>
                    <Text color="#00a650">Llega gratis mañana</Text>
                    <Text fontSize="14px" color="rgba(0,0,0,.5)">
                      Solo en CABA Y zonas de GBA Comprando dentro de la proxima
                      1 h 31 min Beneficio Mercado Puntos Ver más formas de
                      entrega
                    </Text>
                    <Text
                      fontSize="14px"
                      color="#3483fa"
                      _hover={{ opacity: 0.9 }}
                    >
                      Ver más formas de entrega
                    </Text>
                  </Stack>
                </Stack>

                <Stack direction="row">
                  <Icon as={IoArrowUndo} m="5px" color="#00a650" />
                  <Stack>
                    <Text color="#00a650">Devolución gratis</Text>
                    <Text fontSize="14px" color="rgba(0,0,0,.5)">
                      Tenés 30 días desde que lo recibís
                    </Text>
                    <Text
                      fontSize="14px"
                      color="#3483fa"
                      _hover={{ opacity: 0.8 }}
                    >
                      Conocer más
                    </Text>
                  </Stack>
                </Stack>
                <Text>
                  Color: <b>{color}</b>
                </Text>
                <Stack direction="row">
                  <Text>
                    Cantidad: <b>1 unidad</b>
                  </Text>
                  <Text fontSize="14px" color="rgba(0,0,0,.5)">
                    ({unidadesDisponibles} disponibles)
                  </Text>
                </Stack>
                <Text fontSize="14px" color="rgba(0,0,0,.5)">
                  Podés comprar solo 1 unidad
                </Text>
                <Buttons
                  title="Comprar ahora"
                  h="48px"
                  backgroundColor="#3483fa"
                  color="#fff"
                />
                <Buttons
                  title="Agregar al carrito"
                  h="48px"
                  backgroundColor="#C6E7FA"
                  color="#3483fa"
                />
                <Stack direction="row">
                  <Icon as={BiCheckShield} m="5px" fontSize="20px" />
                  <Text>
                    {" "}
                    <b
                      style={{
                        fontSize: "14px",
                        color: "#3483fa",
                        fontWeight: 400,
                      }}
                    >
                      Compra Protegida
                    </b>{" "}
                    recibí el producto que esperabas o te devolvemos tu dinero.
                  </Text>
                </Stack>
                <Stack direction="row">
                  <Icon as={GiTrophyCup} m="5px" fontSize="20px" />
                  <Stack direction="row">
                    <Text>
                      {" "}
                      <b
                        style={{
                          fontSize: "14px",
                          color: "#3483fa",
                          fontWeight: 400,
                        }}
                      >
                        Mercado Puntos,
                      </b>{" "}
                      sumás {mercadoPuntos} puntos.
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction="row">
                  <Icon as={GiAchievement} m="5px" fontSize="20px" />
                  <Text fontSize="14px" color="rgba(0,0,0,.5)">
                    12 meses de garantía de fábrica.
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      </Stack>
      <QuestionsAnswers name={name} />
    </>
  );
};
