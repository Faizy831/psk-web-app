import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {},
  HeadingWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  StaminaImg: {
    width: 60,
    height: 60,
    ["@media (max-width: 590px)"]: {
      width: 50,
      height: 50,
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
  // AVERAGE STYLING
  rounds: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.fontXLLL,
    fontWeight: 700,
    margin: "0px",
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.fontXLL,
    },
    ["@media (max-width: 450px)"]: {
      fontSize: theme.fonts.sizes.fontL,
    },
  },
  averageText: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font2XLLL,
    fontWeight: 400,
    fontSize: "44px",
    margin: "0px",
    ["@media (max-width: 590px)"]: {
      fontSize: 40,
    },
    ["@media (max-width: 450px)"]: {
      fontSize: 35,
      marginLeft: 20,
    },
  },
  roundContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ["@media (max-width: 450px)"]: {
      justifyContent: "initial",
    },
  },
  AverageHeading: {
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.fontXLL,
    color: theme.colors.primary.yellow,
    fontWeight: 400,
    textAlignLast: " end",
    marginBottom: "17px",
    margin: "0px",
    fontSize: "20px",
    ["@media (max-width: 590px)"]: {
      fontSize: 16,
    },
    ["@media (max-width: 450px)"]: {
      marginRight: "6.5rem",
      fontSize: 12,
    },
  },
  RoundSpan: {
    display: "block",
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "28px",
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.fontXLL,
    },
    ["@media (max-width: 450px)"]: {
      fontSize: theme.fonts.sizes.fontL,
    },
  },
  divider: {
    borderBottom: "2px solid #8F908F ",
    margin: "30px 0px",
    ["@media (max-width: 450px)"]: {
      width: 170,
      margin: "16px 0px",
    },
  },
  averageConatiner: {
    display: "flex",
    alignItems: "center",
    paddingTop: "10rem",
    ["@media (max-width: 590px)"]: {
      paddingTop: "4rem",
    },
  },
  averageImg: {
    width: 174,
    height: 174,
    marginLeft: 20,
    ["@media (max-width: 590px)"]: {
      width: 142,
      height: 142,
    },
    ["@media (max-width: 450px)"]: {
      width: 120,
      height: 120,
      marginLeft: -40,
    },
  },
  wrapper: {
    width: 250,
  },
  ScoreWrapper: {
    paddingTop: "10rem",
    ["@media (max-width: 590px)"]: {
      paddingTop: "2rem",
    },
  },
}));
