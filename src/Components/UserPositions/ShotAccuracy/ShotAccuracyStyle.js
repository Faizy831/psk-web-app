import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {},
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
    ["@media (max-width: 590px)"]: {
      fontSize: 30,
    },
  },
  ShotImg: {
    width: 83,
    height: 60,
    marginLeft: "12rem",
    ["@media (max-width: 590px)"]: {
      width: 54,
      height: 38,
    },
    ["@media (max-width: 450px)"]: {
      marginLeft: "0rem",
    },
  },

  ResponsiveWrapper: {
    ["@media (max-width: 450px)"]: {
      position: "relative",
      top: "3rem",
    },
  },

  TextWrapper: {
    display: "flex",
    justifyContent: "end",
    margin: "4rem -1.6rem 0rem 0rem",
    ["@media (max-width: 590px)"]: {
      margin: "2rem -1.6rem 0rem 0rem",
    },
    ["@media (max-width: 450px)"]: {
      margin: "0rem 1rem 0rem 0rem",
    },
  },

  //SHOTACCURACY SYTLING
  AccuracyBoardContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10rem",
    ["@media (max-width: 590px)"]: {
      paddingTop: "5rem",
    },
    ["@media (max-width: 450px)"]: {
      paddingTop: "3rem",
    },
  },

  ShotBoardImg: {
    width: 282,
    height: 126,
    marginLeft: 40,
    ["@media (max-width: 450px)"]: {
      width: 274,
      height: 122,
    },
  },
  NumberWrapper: {
    backgroundColor: theme.colors.primary.yellow,
    border: "2px solid #5B3A81",
    borderRadius: 50,
  },
  Num: {
    display: "flex",
    justifyContent: "center",
    color: theme.colors.secondary.purple,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.fontXLL,
    fontWeight: 700,
    margin: 0,
    width: 26,
    height: 26,
  },
  MiddleNumber: {
    margin: "19px 0px",
  },
  ShotWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "2rem",
    position: "relative",
    top: 20,
    ["@media (max-width: 590px)"]: {
      marginRight: "1rem",
    },
    ["@media (max-width: 450px)"]: {
      position: "relative",
      top: "2rem",
    },
  },
  shotPowerNumber: {
    margin: "0rem 8rem",
    ["@media (max-width: 590px)"]: {
      margin: "0rem 4rem",
    },
  },

  //POSITION STYLING

  Wrapper: {
    display: "flex",
    alignItems: "center",
  },
  PositoinsContainer: {
    margin: "1rem 0rem 0rem 0rem",
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.fontL,
    },
  },

  PositionHeading: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.font2XL,
    fontWeight: 700,
    margin: "2.5px 0px",
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.fontL,
      margin: "0px 0px",
    },
  },
  Divider: {
    "&.MuiDivider-root": {
      backgroundColor: theme.colors.secondary.secondary,
      height: 2,
      width: 217,
      marginTop: 10,
      ["@media (max-width: 450px)"]: {
        width: 180,
      },
    },
  },
  KilomeeterText: {
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.fontXLL,
    color: theme.colors.primary.yellow,
    fontWeight: 400,
    margin: "0px 0px 0px 30px",
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.fontL,
    },
  },
  ScoreWrapper: {
    paddingTop: "1.4rem",
  },
}));
