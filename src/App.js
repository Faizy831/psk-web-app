import React from "react";
import theme from "./Theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
