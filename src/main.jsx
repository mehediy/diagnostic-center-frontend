import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { HelmetProvider } from "react-helmet-async";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./provider/AuthProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={routes} />
            <Toaster />
          </QueryClientProvider>
        </HelmetProvider>
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
