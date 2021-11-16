import { Stack } from "@chakra-ui/react";
import React from "react";
import { ViewMenuDesplegable } from "./ViewMenuDesplegable";

interface Props {
  changeDisplay: boolean;
}

export const MenuDesplegable = ({ changeDisplay }: Props) => {
  return (
    <>
      {changeDisplay && (
        <Stack
          w="100vw"
          bgColor="#fff"
          h="70vh"
          flexDir="column"
          zIndex={2}
          display={["flex", "flex", "flex", "none", "none"]}
          borderTopWidth={1}
          boxShadow="md"
        >
          <ViewMenuDesplegable />
        </Stack>
      )}
    </>
  );
};
