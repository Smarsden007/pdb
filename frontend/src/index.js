import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <div>
        <App />
      </div>
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
