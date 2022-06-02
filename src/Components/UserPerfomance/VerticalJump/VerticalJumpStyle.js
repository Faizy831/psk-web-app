import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {},
  HeadingWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  VerticalJumpImg: {
    width: 59,
    height: 68,
    marginLeft: "17rem",
  },
  Heading: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font2XLLL,
    fontWeight: 400,
    margin: 0,
  },
  VerticaljumpGraphImg: {
    width: 423,
    height: 488,
    paddingTop: "7.5rem",
  },
  ScoreBoardWrapper: {
    paddingTop: "1.7rem"
  }
}));
