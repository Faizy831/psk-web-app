import { makeStyles } from "@material-ui/core/styles";
import { Flare } from "@material-ui/icons";
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
  },
  AgilityIcon: {
    width: 44,
    height: 68,
  },
  normal: {
    width: 137,
    height: 20,
  },
  large: {
    width: 128,
    height: 77,
  },
  DribbleIcon: {
    width: 53,
    height: 62,
  },
  DribbleImg: {
    width: 137,
    height: 20,
    marginLeft: "-8rem"
  },
  mainContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: 1000,
  },
  section1: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    minHeight: 1000,
  },
  section2: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    minHeight: 1000,
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
