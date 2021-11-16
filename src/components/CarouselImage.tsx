import React from "react";
//@ts-ignore
import { Carousel } from "react-carousel-minimal";
import { Stack } from "@chakra-ui/react";
import data from "../data/imageCarousel";

export const CarouselImage = () => {
  return (
    <Stack px={{ base: "0px", lg: "150px" }}>
      <Carousel
        data={data}
        time={2000}
        width="100%"
        height="100%"
        automatic={true}
        dots={true}
        pauseIconSize="40px"
        slideImageFit="contain"
      />
    </Stack>
  );
};
