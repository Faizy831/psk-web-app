import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    // width: "50%",
    // margin: "auto"
  },
  HeadingWrapper: {
    display: "flex",
    alignItems: "center",
  },
  Heading: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font2XLLL,
    fontWeight: 400,
    margin: 0,
  },
  Clock: {
    width: 61,
    height: 68,
    marginLeft: "10rem",
  },
  ChartWrapper: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10rem",
  },
  SpeedChartimg: {
    width: 458,
    height: 333,
  },
  Wrapper: {
    display: "flex",
    paddingTop: "15.5rem",
  },
}));
