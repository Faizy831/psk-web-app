import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  TextContainer: {},
  Text: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.fontXLL,
    fontWeight: 400,
    fontStyle: "normal",
    margin: "0px 20px",
    textAlign: "center",
    width: 110,
   
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.fontM,
      width: 70,
    },
    ["@media (max-width: 450px)"]: {
      width: 40,
    },
    ["@media (max-width: 375px)"]: {
      width: 30,
    },
  },
  IconWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  TextIcon: {
    width: 25,
    height: 25,
    marginTop: "10px",
  },
}));
