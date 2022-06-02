import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  Text: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.fontXLL,
    fontWeight: 400,
    fontStyle: "normal",
    margin: "0px 20px",
    width: 110,
    textAlign: "center",
  },
  MiddleText: {
    display: "none",
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
