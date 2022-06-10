import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    ["@media (max-width: 930px)"]: {
      marginBottom: "3rem",
    },
  },
  HeadingWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  VerticalJumpImg: {
    width: 59,
    height: 68,
    marginLeft: "17rem",
    ["@media (max-width: 590px)"]: {
      width: 45,
      height: 52,
      marginLeft: "15rem",
    },
    ["@media (max-width: 450px)"]: {
      width: 45,
      height: 52,
      marginLeft: "10rem",
    },
  },
  Heading: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font2XLLL,
    fontWeight: 400,
    margin: 0,
    ["@media (max-width: 590px)"]: {
      fontSize: 30,
    },
  },
  VerticaljumpGraphImg: {
    width: 423,
    height: 488,
    paddingTop: "7.5rem",
    ["@media (max-width: 590px)"]: {
      width: 300,
      height: 350,
      paddingTop: "3rem",
    },
  },
  ScoreBoardWrapper: {
    paddingTop: "1.7rem",
    ["@media (max-width: 590px)"]: {
      paddingTop: "0rem",
    },
  },

  // VERTICAL JUMP STYLING
  LinearGauge: {
    "&:first-child ": {
      "& svg": {
        // display: "none",
      },
    },
  },
}));
