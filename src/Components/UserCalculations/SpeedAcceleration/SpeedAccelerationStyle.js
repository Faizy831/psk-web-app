import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    ["@media (max-width: 956PX)"]: {
      marginBottom: 50,
    },
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
  SpanResponsive: {
    ["@media (max-width: 590px)"]: {
      display: "block",
    },
  },
  Clock: {
    width: 61,
    height: 68,
    marginLeft: "10rem",
    ["@media (max-width: 590px)"]: {
      width: 44,
      height: 50,
    },
    ["@media (max-width: 450px)"]: {
      marginLeft: "0rem",
    },
  },
  ChartWrapper: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10rem",
    ["@media (max-width: 590px)"]: {
      paddingTop: "5rem",
    },
    ["@media (max-width: 450px)"]: {
      paddingTop: "1rem",
    },
  },
  SpeedChartimg: {
    width: 458,
    height: 333,
    ["@media (max-width: 590px)"]: {
      width: 400,
      height: 300,
    },
    ["@media (max-width: 450px)"]: {
      width: "95%",
      height: 240,
    },
  },
  Wrapper: {
    paddingTop: "15.5rem",
    ["@media (max-width: 590px)"]: {
      paddingTop: "5rem",
    },
    ["@media (max-width:450px)"]: {
      paddingTop: "0rem",
    },
  },
}));
