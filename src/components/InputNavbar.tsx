import { Input } from "@chakra-ui/react";

export const InputNavbar = () => {
  return (
    <>
      <Input
        variant="unstyled"
        paddingX={2}
        placeholder="Buscar productos, marcas y más..."
        autoFocus
      />
    </>
  );
};
