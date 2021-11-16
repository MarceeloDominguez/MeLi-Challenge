import { ChakraProvider } from "@chakra-ui/react";
import { Routes } from "./Navegation/Routes";

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
    </>
  );
}

export default App;
