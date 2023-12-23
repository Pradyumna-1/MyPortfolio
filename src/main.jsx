// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// import ColorModeSwitcher from "./ColorModeSwitcher.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ChakraProvider theme={theme}>
//       <App />
//       <ColorModeSwitcher />
//     </ChakraProvider>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, theme } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher.jsx";
import "./styles/app.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
