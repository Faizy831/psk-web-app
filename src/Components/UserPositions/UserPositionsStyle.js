import { makeStyles } from "@material-ui/core/styles";
import ResponsiveBG from "../../assets/ResponsiveBG.png";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    ["@media (max-width: 937px)"]: {
      backgroundImage: `url(${ResponsiveBG})`,
      width: "100%",
      height: "100%",
      minHeight: 980,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      ["@media (max-width: 872px)"]: {
        backgroundSize: "100% 100%",
        minHeight: "100%",
      },
    },
  },
  Wrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "5rem 0rem 1rem 0rem",
    ["@media (max-width: 590px)"]: {
      padding: "3rem 0rem 3rem 0rem",
    },
  },
}));
