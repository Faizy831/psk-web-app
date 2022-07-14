import { makeStyles } from "@material-ui/core/styles";
// import Bg3 from "../../assets/Bg3.png";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    // backgroundImage: `url(${Bg3})`,
    // width: "100%",
    // minHeight: 1024,
    // backgroundSize: "100% 100%",
    // backgroundRepeat: "no-repeat",
    // ["@media (max-width: 872px)"]: {
    //   backgroundSize: "100% 100%",
    //   minHeight: "100%",
    // },
  },
  ComWrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "5rem 0rem 5rem 0rem",
    ["@media (max-width: 590px)"]: {
      padding: "3rem 0rem 3rem 0rem",
    },
  },
  HandImg: {
    width: 84,
    height: 60,
    marginLeft: "17rem",
    ["@media (max-width: 590px)"]: {
      width: 70,
      height: 50,
      marginLeft: "14rem",
    },
    ["@media (max-width: 450px)"]: {
      marginLeft: "10rem",
    },
    ["@media (max-width: 400px)"]: {
      marginLeft: "8rem",
    },
  },
}));
