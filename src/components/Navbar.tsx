import {
  Stack,
  Box,
  Container,
  Image,
  Icon,
  StackDivider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../img/logo.png";
import disney from "../img/disney.webp";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { MenuHamburger } from "./MenuHamburger";
import { GiHamburgerMenu } from "react-icons/gi";
import { MenuDesplegable } from "./MenuDesplegable";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [changeDisplay, setChangeDisplay] = useState(false);

  return (
    <>
      <Box backgroundColor="#fff159" boxShadow="sm" paddingY={2}>
        <Container maxWidth="1200px">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={5} flex={1} height={"40px"}>
                <Link to="/">
                  <Image src={logo} objectFit="contain" />
                </Link>
                <Stack
                  direction="row"
                  backgroundColor="#fff"
                  maxWidth={{ base: 700, lg: 600 }}
                  flex={1}
                  divider={<StackDivider />}
                  padding={2}
                  borderRadius="sm"
                  boxShadow="md"
                  alignItems="center"
                >
                  <Icon
                    as={AiOutlineSearch}
                    width={5}
                    height={5}
                    color="gray.400"
                  />
                </Stack>
              </Stack>
              <Stack alignItems="center">
                <Image
                  src={disney}
                  objectFit="contain"
                  width={{ base: "0px", lg: "340px" }}
                />
                <Stack direction="row">
                  <Icon
                    as={changeDisplay ? AiOutlineClose : GiHamburgerMenu}
                    onClick={() => setChangeDisplay(!changeDisplay)}
                    display={["flex", "flex", "flex", "none", "none"]}
                    size="lg"
                    mr={2}
                    ml={2}
                    width={5}
                    height={5}
                  />
                  <Icon
                    as={FiShoppingCart}
                    width={5}
                    height={5}
                    display={["flex", "flex", "flex", "none", "none"]}
                  />
                </Stack>
              </Stack>
            </Stack>
            {/* desktop component */}
            <MenuHamburger />
          </Stack>
        </Container>
      </Box>
      {/* responsive component */}
      <MenuDesplegable changeDisplay={changeDisplay} />
    </>
  );
};
