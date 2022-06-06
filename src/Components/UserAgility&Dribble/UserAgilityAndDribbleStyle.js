import { makeStyles } from "@material-ui/core/styles";
import Bg2 from "../../assets/Bg2.png";

export const useStyle = makeStyles((theme) => ({
  Wrapper: {
    backgroundImage: `url(${Bg2})`,
    width: "100%",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
  },
  heading: {
    fontWeight: 400,
    fontSize: theme.fonts.sizes.font2XLLL,
    ["@media (max-width: 590px)"]: {
      fontSize: 30,
    },
  },
  AgilityIcon: {
    width: 44,
    height: 68,
    marginLeft: "20rem",
    ["@media (max-width: 590px)"]: {
      width: 38,
      height: 60,
    },
    ["@media (max-width: 450px)"]: {
      marginLeft: "15rem",
    },
  },
  normal: {
    width: 137,
    height: 20,
  },
  large: {
    width: 128,
    height: 77,
    ["@media (max-width: 590px)"]: {
      width: 94,
      height: 57,
      marginLeft: "-5rem",
    },
  },
  DribbleIcon: {
    width: 53,
    height: 62,
    marginLeft: "20rem",
    ["@media (max-width: 590px)"]: {
      width: 43,
      height: 50,
    },
    ["@media (max-width: 450px)"]: {
      marginLeft: "15rem",
    },
  },
  DribbleImg: {
    width: 137,
    height: 20,
    marginLeft: "-8rem",
    ["@media (max-width: 590px)"]: {
      marginLeft: "-3rem",
    },
  },
  mainContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
    minHeight: 1000,
    ["@media (max-width: 590px)"]: {
      padding: "1rem 0rem 1rem 0rem",
    },
  },
  section1: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    minHeight: 1000,
    ["@media (max-width: 590px)"]: {
      minHeight: 500,
    },
  },
  section2: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    minHeight: 1000,
    ["@media (max-width: 590px)"]: {
      minHeight: 500,
    },
  },
  divider: {
    borderBottom: "2px solid  #8F908F",
    margin: "15px 0px",
  },
  showcase: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  AttemptText: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    fontWeight: 700,
    fontSize: "22px",
    margin: "0px",
    padding: "0px",
    margin: "10px 2px",
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.fontXL,
    },
  },
  Attemptnbr: {
    fontSize: "44px",
    fontWeight: 400,
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    margin: "10px 2px",
    marginLeft: "0px",
    padding: "0px",
  },
}));
