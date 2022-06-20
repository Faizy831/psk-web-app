import React from "react";
import theme from "./Theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import ConfigureStore from "./Store/Store";
import { Provider } from "react-redux";
import AppRoutes from "./Routes/Routes";
const { store } = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
