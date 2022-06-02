import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContianer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
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
  LongPass: {
    width: 61,
    height: 61,
    marginLeft: "17rem",
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
  LineChartContianer: {
    position: "relative",
    paddingTop: "2rem",
  },
  LineChartText: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.quaternary,
    fontSize: theme.fonts.sizes.font2XL,
    fontWeight: "bold",
    margin: 0,
    textAlign: "center",
    marginBottom: 10,
  },
  Line: {
    position: "absolute",
    left: "4rem",
    height: 2,
    width: 320,
    backgroundColor: theme.colors.secondary.secondary,
  },
}));
