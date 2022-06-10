import React from "react";
import theme from "./Theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import HomePage from "./Pages/HomePage/HomePage";
import ConfigureStore from "./Store/Store";
import { Provider } from "react-redux";

const { store } = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
