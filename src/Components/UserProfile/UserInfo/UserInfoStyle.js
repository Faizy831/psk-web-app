import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "65%",
    margin: "10rem auto auto auto",
    ["@media (max-width: 1050px)"]: {
      margin: "5rem auto auto auto",
    },
    ["@media (max-width: 872px)"]: {
      margin: "6rem auto auto auto",
      width: "80%",
    },
  },
  UserInfoWrapper: {
    ["@media (max-width: 872px)"]: {
      marginTop: "2rem",
    },
  },
  AgeText: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XL,
    fontWeight: 400,
    margin: 0,
  },
  AgeNumber: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XLLL,
    fontWeight: 400,
    margin: "-5px 0px 0px 0px",
  },
  info: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XL,
    fontWeight: 400,
    margin: 0,
  },
  Num: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
  },
  AgeGroupWrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: "2.5rem",
    ["@media (max-width: 872px)"]: {
      marginLeft: -27,
    },
  },
  Avatar: {
    width: 174,
    height: 178,
    objectFit: "cover",
    // ["@media (max-width: 700px)"]: {
    //   width: 127,
    //   height: 130,
    // },
  },
  ResponsiveWrapper: {
    ["@media (max-width: 872px)"]: {
      display: "flex",
      marginLeft: 45,
    },
  },
  UserPofileWrapper: {
    display: "flex",
    alignItems: "center",
    marginTop: "2rem",
    ["@media (max-width: 872px)"]: {
      flexDirection: "column-reverse",
      marginTop: "0rem",
    },
  },
  AgeGroup: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XL,
    fontWeight: 400,
    margin: 0,
  },
  Vector: {
    width: 20,
    height: 43,
    margin: "0px 10px",
  },
  IniciadosText: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XL,
    fontWeight: 400,
    margin: 0,
  },
  FranciscoText: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XLL,
    fontWeight: 400,
    margin: 0,
    ["@media (max-width: 872px)"]: {
      marginRight: 12,
    },
  },
  VinagreText: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XLL,
    fontWeight: 400,
    margin: 0,
  },
  TextWrapper: {
    margin: "-2rem 0rem 0rem -6rem",
  },
  DateWrapper: {
    marginTop: "1.5rem",
    ["@media (max-width: 872px)"]: {
      marginTop: "3rem",
    },
  },
  DateText: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XL,
    fontWeight: 400,
    margin: 0,
  },
  DateNum: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XLLL,
    fontWeight: 400,
    margin: 0,
  },
  SecondNum: {
    marginTop: "-10px !important",
  },
  DiverContainer: {
    width: "68%",
    margin: "3rem auto auto auto",
    ["@media (max-width: 872px)"]: {
      width: "80%",
    },
  },
  Divider: {
    "&.MuiDivider-root": {
      backgroundColor: theme.colors.secondary.purple,
      height: 2,
      width: "100%",
    },
  },
  FinalScoreWrapper: {
    display: "flex",
    width: "68%",
    margin: "auto",
    justifyContent: "space-between",
    ["@media (max-width: 872px)"]: {
      width: "80%",
    },
  },
  FinalTextWrapper: {
    display: "flex",
    alignItems: "center",
  },
  Vector2: {
    height: 68,
    width: 32,
    objectFit: "cover",
    marginRight: 10,
  },
  FinalText: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.font2XLL,
    fontWeight: 400,
    margin: "20px 0px 0px 0px",
  },
  ScoreNumber: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XLL,
    fontWeight: 400,
    margin: "20px 0px 0px 0px",
  },
}));
