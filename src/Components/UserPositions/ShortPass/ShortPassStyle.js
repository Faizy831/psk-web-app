import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    marginBottom: 50,
  },
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
    ["@media (max-width: 590px)"]: {
      fontSize: 30,
    },
  },
  FootballImg: {
    width: 68,
    height: 68,
    marginLeft: "18rem",
    ["@media (max-width: 590px)"]: {
      width: 50,
      height: 50,
      marginLeft: "15rem",
    },
    ["@media (max-width: 450px)"]: {
      marginLeft: "10rem",
    },
  },
  TextWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "10rem 0rem 0rem 3rem",
    position: "relative",
    top: "2rem",
    left: "2rem",
    ["@media (max-width: 590px)"]: {
      padding: "4rem 0rem 0rem 3rem",
      top: "1rem",
    },
    ["@media (max-width: 450px)"]: {
      padding: "4rem 0rem 0rem 0rem",
    },
  },
  TouchesText: {
    ["@media (max-width: 590px)"]: {
      width: 80,
    },
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
    margin: "0px 0px 0px -10px",
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.fontL,
      margin: "0px 0px 0px 15px",
    },
    ["@media (max-width: 450px)"]: {
      fontSize: theme.fonts.sizes.fontM,
    },
  },
  AttemptSpan: {
    display: "block",
    marginTop: 5,
  },
  ProgressContainer: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "6.2rem",
    ["@media (max-width: 450px)"]: {
      marginLeft: "5rem",
    },
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
      ["@media (max-width: 590px)"]: {
        width: "90%",
      },
    },
  },
  MiddleText: {
    width: 100,
    ["@media (max-width: 590px)"]: {
      width: 50,
      margin: "0px 10px"
    },
    ["@media (max-width: 450px)"]: {
      width: 50,
      margin: "0px -10px"
    },
  },
  ScoreWrapper: {
    paddingTop: "10rem",
    ["@media (max-width: 590px)"]: {
      paddingTop: "3rem",
    },
  },

  // NUMBERS HEADING

  Wrapper: {
    position: "relative",
    top: "5rem",
    left: "2rem",
  },
  NumbersWrapper: {
    display: "flex",
    justifyContent: "space-between",
    margin: "-3rem 2rem 0rem 8rem",
    position: "relative",
    top: "-0.3rem",
    ["@media (max-width: 590px)"]: {
      margin: "-3rem 2rem 0rem 9rem",
    },
    ["@media (max-width: 450px)"]: {
      margin: "-3rem 2rem 0rem 7rem",
    },
  },
  Numbers: {
    color: theme.colors.secondary.purple,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: 40,
    fontWeight: 400,
    margin: 0,
    ["@media (max-width: 590px)"]: {
      fontSize: 30,
    },
  },
  Percentage: {
    // margin: "0rem 6rem",
  },
}));
