import { makeStyles } from "@material-ui/core/styles";
import Bg2 from "../../assets/Bg2.png";

export const useStyles = makeStyles((theme) => ({
  MainContianer: {
    backgroundImage: `url(${Bg2})`,
    width: "100%",
    minHeight: 1024,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    zIndex: 99999,
    ["@media (max-width: 872px)"]: {
      backgroundSize: "100% 100%",
      minHeight: "100%",
    },
  },
}));
