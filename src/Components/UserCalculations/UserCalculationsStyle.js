import { makeStyles } from "@material-ui/core/styles";
import Bg2 from "../../assets/Bg2.png";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    backgroundImage: `url(${Bg2})`,
    width: "100%",
    minHeight: 1024,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    ["@media (max-width: 872px)"]: {
      backgroundSize: "100% 100%",
      minHeight: "100%",
    },
  },
  ComWrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "5rem 0rem 5rem 0rem",
    ["@media (max-width: 590px)"]: {
      padding: "1.5rem 0rem 5rem 0rem",
    },
  },
}));
