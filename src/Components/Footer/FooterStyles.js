import { makeStyles } from "@material-ui/core/styles";
import Bg1 from "../../assets/Bg1.png";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
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
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: 1024,
  },
  FooterIcon: {
    width: 490,
    height: 488,
    ["@media (max-width: 590px)"]: {
      width: "100%",
      height: 400,
    },
    ["@media (max-width: 450px)"]: {
      width: "100%",
      height: 350,
    },
  },
  showcase: {
    paddingTop: "71px",
  },
  emailWrapper: {
    display: "flex",
    marginBottom: "10px",
    alignItems: "center",
  },
  Email: {
    color: theme.colors.primary.white,
    fontWeight: 400,
    margin: "0px",
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.font2XL,
  },
  EmailIcon: {
    marginRight: 20,
    width: 18,
    height: 13,
  },
  compasWrapper: {
    display: "flex",
    alignItems: "center",
  },
  Site: {
    color: theme.colors.primary.white,
    color: theme.colors.primary.white,
    fontWeight: 400,
    fontSize: theme.fonts.sizes.font2XL,
    margin: "0px",
    fontFamily: theme.fonts.family.primary,
  },
  CompasIcon: {
    width: 21,
    height: 21,
    marginRight: 20,
  },
  footerText: {
    marginTop: "26px",
    "& h2": {
      fontWeight: 400,
      fontSize: theme.fonts.sizes.font2XL,

      color: theme.colors.primary.yellow,
      fontFamily: theme.fonts.family.primary,
    },
  },
}));
