import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  title: string;
  h: string;
  backgroundColor?: string;
  color?: string;
}

export const Buttons = ({
  title,
  h,
  backgroundColor = "red",
  color = "#fff",
}: Props) => {
  return (
    <Button
      variant="unstyled"
      backgroundColor={backgroundColor}
      color={color}
      h={h}
      _hover={{ opacity: 0.9 }}
      transition=".2s"
    >
      {title}
    </Button>
  );
};
