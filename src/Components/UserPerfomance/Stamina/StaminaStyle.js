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
  },
  Heading: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font2XLLL,
    fontWeight: 400,
    margin: 0,
  },
  // AVERAGE STYLING
  rounds: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.fontXLLL,
    fontWeight: 700,
    margin: "0px",
  },
  averageText: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font2XLLL,
    fontWeight: 400,
    fontSize: "44px",
    margin: "0px",
  },
  roundContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  RoundSpan: {
    display: "block",
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "28px",
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
  },
  divider: {
    borderBottom: "2px solid #8F908F ",
    margin: "30px 0px",
  },
  averageConatiner: {
    display: "flex",
    alignItems: "center",
    paddingTop: "10rem",
  },
  averageImg: {
    width: 174,
    height: 174,
    marginLeft: 20,
  },
  wrapper: {
    width: 250,
  },
  ScoreWrapper: {
    paddingTop: "10rem"
  }
}));
