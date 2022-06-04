import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    display: "none"
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
  ShotImg: {
    width: 83,
    height: 60,
    marginLeft: "12rem",
  },

  TextWrapper: {
    display: "flex",
    justifyContent: "end",
    margin: "7rem -1.6rem 0rem 0rem",
  },

  //SHOTACCURACY SYTLING
  AccuracyBoardContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10rem",
  },

  ShotBoardImg: {
    width: 282,
    height: 126,
    marginLeft: 40,
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

  //POSITION STYLING

  PositoinsContainer: {
    margin: "2rem 0rem 0rem 0rem",
  },

  PositionHeading: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.font2XL,
    fontWeight: 700,
    margin: "15px 0px",
  },
  Divider: {
    "&.MuiDivider-root": {
      backgroundColor: theme.colors.secondary.secondary,
      height: 2,
      width: 217,
      marginTop: 10,
    },
  },
  ScoreWrapper: {
    paddingTop: "1.4rem",
  },
}));
