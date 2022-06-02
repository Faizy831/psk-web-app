import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    marginBottom: 100,
  },
  HeadingWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Heading: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font2XLLL,
    fontWeight: 400,
    margin: 0,
  },
  FootballImg: {
    width: 68,
    height: 68,
  },
  TextWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "13rem 0rem 0rem 3rem",
  },

  //ATTEMPT STYLING

  AttemptContainer: {
    margin: "1rem 0rem 0rem 0rem",
    paddingTop: "2rem",
  },
  AttemptHeading: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.font2XL,
    fontWeight: 700,
    margin: 0,
  },
  AttemptSpan: {
    display: "block",
    marginTop: 5,
  },
  ProgressContainer: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "3rem",
  },
  ProgressWrapper: {
    width: 65,
    backgroundColor: theme.colors.primary.darkPurple,
    padding: 2,
  },
  ProgressBar: {
    width: 62,
    height: 3,
    backgroundColor: "#322249 !important",
    "& .MuiLinearProgress-bar": {
      backgroundColor: theme.colors.secondary.lightBlue,
    },
  },
  Divider: {
    marginTop: 15,
    "&.MuiDivider-root": {
      backgroundColor: theme.colors.secondary.secondary,
      height: 2,
      width: 464,
      marginLeft: "1rem",
    },
  },
  MiddleText: {
    width: 100,
  },
  ScoreWrapper: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10rem",
  },
}));
