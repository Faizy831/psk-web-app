import { makeStyles } from "@material-ui/core/styles";
import Bg1 from "../../assets/Bg1.png";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundImage: `url(${Bg1})`,
    width: "100%",
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
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
