import { makeStyles } from "@material-ui/core/styles";
import Bg1 from "../../assets/Bg1.png";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    backgroundImage: `url(${Bg1})`,
    width: "100%",
    minHeight: 1024,
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
    ["@media (max-width: 1519px)"]: {
      backgroundSize: "100% 100%",
      minHeight: "100%",
    },
    ["@media (max-width: 872px)"]: {
      backgroundSize: "100% 100%",
      minHeight: 700,
    },
    ["@media (max-width: 590px)"]: {
      backgroundSize: "100% 100%",
      minHeight: 600,
    },
  },
  ContentWrapper: {},
  LogoWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  Logo: {
    height: 105,
    width: 123,
    marginTop: "2rem",
  },
}));
