import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box w="90%" m="auto" className="App">
      <AllRoutes />
    </Box>
  );
}

export default App;
