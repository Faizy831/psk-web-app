import { createTheme } from "@material-ui/core/styles";
import "../font.css";

export default createTheme({
  fonts: {
    family: {
      primary: "Roboto, sans-serif",
      secondary: "leaguegothiccondensed",
      tertiary: "leaguegothiregular",
      quaternary: "sourcecodepro",
    },
    sizes: {
      fontXXS: 9,
      fontXS: 10,
      fontS: 12,
      fontM: 14,
      fontL: 16,
      fontXL: 18,
      fontXLL: 20,
      fontXLLL: 22,
      font2XL: 24,
      font2XLL: 32,
      font2XLLL: 38,
      font3XL: 36,
      font3XLL: 48,
      font3XLLL: 60,
    },
  },
  colors: {
    primary: {
      white: "#FFFFFF",
      yellow: "#E2DD00",
      darkPurple: "#322249",
    },
    secondary: {
      purple: "#5B3A81",
      lightBlue: "#6CC5DC",
      secondary: "#8F908F",
    },
  },
});
