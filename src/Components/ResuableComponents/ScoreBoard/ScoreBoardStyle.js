import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    paddingTop: "3rem",
  },
  Divider: {
    "&.MuiDivider-root": {
      backgroundColor: theme.colors.secondary.purple,
      height: 2,
      width: 467,
    },
  },
  Vector2: {
    width: 27,
    height: 56,
    marginRight: 20,
  },
  Wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  ScoreWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "0.5rem",
  },
  scoreText: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.fontXLL,
    fontWeight: 400,
    margin: 0,
  },
  TextWrapper: {
    display: "flex",
    alignItems: "center",
  },
  ScoreNum: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: 40,
    fontWeight: 400,
    margin: 0,
  },
  Span: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: 30,
    fontWeight: 400,
    margin: 0,
  },
}));
