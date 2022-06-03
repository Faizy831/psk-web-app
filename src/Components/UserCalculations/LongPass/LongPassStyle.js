import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContianer: {},
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
  LongPass: {
    width: 61,
    height: 61,
    marginLeft: "17rem",
    ["@media (max-width: 590px)"]: {
      width: 50,
      height: 50,
    },
    ["@media (max-width: 450px)"]: {
      marginLeft: "13rem",
    },
  },
  longpassChart: {
    display: "flex",
    justifyContent: "center",
  },
  longpassChartimg: {
    width: 320,
    height: 320,
    marginTop: "2rem",
  },

  //LINECHART STYLING
  LineChartWrapper: {
    marginTop: 30,
  },
  LineChartContianer: {
    paddingTop: "1rem",
  },
  LineChartText: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.font2XL,
    fontWeight: 700,
    margin: 0,
    textAlign: "center",
    marginBottom: 10,
  },
  Divider: {
    "&.MuiDivider-root": {
      backgroundColor: theme.colors.secondary.secondary,
      height: 2,
      width: "70%",
      margin: "auto",
      ["@media (max-width: 450px)"]: {
        width: "85%",
      },
    },
  },
  ScoreWrapper: {
    paddingTop: "2rem",
    ["@media (max-width: 450px)"]: {
      paddingTop: "1rem",
    },
  },
}));
