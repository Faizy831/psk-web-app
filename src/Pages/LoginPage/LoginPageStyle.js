import { makeStyles } from "@material-ui/core/styles";
import Bg1 from "../../assets/Bg1.png";

export const useStyles = makeStyles((theme) => ({
  LoginContainer: {
    backgroundImage: `url(${Bg1})`,
    width: "100%",
    minHeight: 800,
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
    ["@media (max-width: 872px)"]: {
      backgroundSize: "100% 100%",
    },
    ["@media (max-width: 453px)"]: {
      backgroundSize: "100% 100%",
      minHeight: 667,
    },
  },
  LogoWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  Logo: {
    width: 130,
    height: 130,
    marginTop: "3rem",
  },
}));
