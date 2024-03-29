import React from "react";
import { createRoot } from 'react-dom/client'; // New For React18
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ShopProvider from "./context/shopContext";
import { ChakraProvider } from '@chakra-ui/react'

const rootElement = document.getElementById("root"); // New For React 18
const root = createRoot(rootElement);

root.render(
   <React.StrictMode>
      <ChakraProvider>
         <ShopProvider>
            <App />
         </ShopProvider>
      </ChakraProvider>
   </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

