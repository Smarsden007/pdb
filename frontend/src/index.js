  import React from "react";
  import { createRoot } from "react-dom/client";
  import App from "./App";
  import { store } from "./redux/store";
  import { Provider } from "react-redux";
  import {HelmetProvider} from 'react-helmet-async'
  import "./index.css";
  import { QueryClient, QueryClientProvider } from "react-query";
import { Background } from "./clientComps/Background";
 
  const queryClient = new QueryClient();
  createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div>
          <HelmetProvider>
          <Background>
          <App />
          </Background>
          </HelmetProvider>
        </div>
      </QueryClientProvider>
    </Provider>
  );
