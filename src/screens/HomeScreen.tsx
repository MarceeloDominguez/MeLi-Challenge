import React from "react";
import { Navbar } from "../components/Navbar";
import { Stack } from "@chakra-ui/react";
import { CarouselImage } from "../components/CarouselImage";
import { HorizontalSlider } from "../components/HorizontalSlider";
import { Banner } from "../components/Banner";
import data from "../data/data";
import { Footer } from "../components/Footer";

export const HomeScreen = () => {
  const lastView = data.filter((item) => item.idCategory === "lastView");
  const technology = data.filter((item) => item.idCategory === "technology");

  return (
    <Stack spacing={0} overflow="hidden">
      <Navbar />
      <CarouselImage />
      <Stack>
        <Banner />
      </Stack>
      <Stack>
        <HorizontalSlider
          title="Basado en tu última visita"
          products={lastView}
        />
        <HorizontalSlider title="Tecnología" products={technology} />
      </Stack>
      <Footer />
    </Stack>
  );
};
