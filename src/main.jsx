import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./ThemeProvider/ThemeProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
