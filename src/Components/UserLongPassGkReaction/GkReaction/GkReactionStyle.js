import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  HeadingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ["@media (max-width: 590px)"]: {
      marginTop: "5rem",
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
  HandsImg: {
    width: 84,
    height: 60,
    marginLeft: "17rem",
    ["@media (max-width: 590px)"]: {
      width: 70,
      height: 50,
    },
    ["@media (max-width: 450px)"]: {
      marginLeft: "13rem",
    },
    ["@media (max-width: 400px)"]: {
      marginLeft: "10rem",
    },
  },
  GkreationImage: {
    width: "92px !important",
    height: "38px !important",
    marginLeft: "-8rem",
    ["@media (max-width: 590px)"]: {
      width: "67px !important",
      height: "28px !important",
    },
  },
  Wrapper: {
    marginTop: "13.1rem",
    ["@media (max-width: 590px)"]: {
      marginTop: "4rem",
    },
  },
  ScoreWrapper: {
    marginTop: "16rem",
    ["@media (max-width: 590px)"]: {
      marginTop: "2rem",
    },
  },
}));
