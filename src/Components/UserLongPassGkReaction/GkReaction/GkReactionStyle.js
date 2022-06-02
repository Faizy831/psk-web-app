import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  HeadingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Heading: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font2XLLL,
    fontWeight: 400,
    margin: 0,
  },
  HandsImg: {
    width: 84,
    height: 60,
  },
  GkreationImage: {
    width: "92px !important",
    height: "38px !important",
    marginLeft: "-8rem",
  },
  Wrapper: {
    marginTop: "14rem",
  },
  ScoreWrapper: {
    marginTop: "16rem",
  },
}));
