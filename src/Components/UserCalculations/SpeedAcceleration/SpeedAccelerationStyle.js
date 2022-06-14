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
      marginLeft: "11rem",
    },
  },
  ChartWrapper: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "13.3rem",
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
      width: 270,
      height: 220,
    },
  },
  Wrapper: {
    paddingTop: "12.3rem",
    ["@media (max-width: 590px)"]: {
      paddingTop: "5rem",
    },
    ["@media (max-width:450px)"]: {
      paddingTop: "0rem",
    },
  },

  // CHART STYLING

  SpeedChartContainer: {
    display: "flex",
  },
  Chart: {
    marginTop: 25,
  },
  Img: {
    width: 82,
    height: 280,
  },
  ChartBottomText: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: -80,
  },
  BottomText: {
    color: "#797979",
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.fontXLL,
    fontWeight: 400,
  },

  //SPEEDCHARTTEXT STYLING
  TextComponentContainer: {},
  SpeedText: {
    fontFamily: theme.fonts.family.primary,
    color: theme.colors.primary.yellow,
    fontSize: theme.fonts.sizes.fontXLL,
    fontWeight: 400,
    margin: 0,
    textAlign: "center",
  },
  SpeedNumber: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: 44,
    fontWeight: 400,
    margin: 0,
    textAlign: "center",
  },
  spanText: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.fontL,
    fontWeight: 400,
    margin: "0px 0px 0px 10px",
  },
  Divider: {
    "&.MuiDivider-root": {
      backgroundColor: theme.colors.secondary.purple,
      height: 2,
      width: 157,
      margin: "auto",
    },
  },
  TextWrapper: {
    marginTop: -90,
  },
  AccelerationWrapper: {
    marginTop: 10,
  },
}));
