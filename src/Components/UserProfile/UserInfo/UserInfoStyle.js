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
    ["@media (max-width: 590px)"]: {
      margin: "5rem auto auto auto",
      width: "85%",
    },
    ["@media (max-width: 500px)"]: {
      margin: "5rem auto auto auto",
      width: "90%",
    },
  },
  UserInfoWrapper: {
    ["@media (max-width: 872px)"]: {
      marginTop: "1rem",
    },
  },
  AgeText: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XL,
    fontWeight: 400,
    margin: 0,
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.font2XL,
    },
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
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.font2XL,
    },
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
    ["@media (max-width: 590px)"]: {
      margin: "1rem 0rem 0rem 0.6rem",
    },
  },
  Avatar: {
    width: 174,
    height: 178,
    objectFit: "cover",
  },
  ResponsiveWrapper: {
    ["@media (max-width: 872px)"]: {
      display: "flex",
      marginLeft: 45,
    },
    ["@media (max-width: 590px)"]: {
      display: "flex",
      marginLeft: "5rem",
      marginTop: "-1rem",
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
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.fontXLL,
    },
  },
  Vector: {
    width: 20,
    height: 43,
    margin: "0px 10px",
    ["@media (max-width: 590px)"]: {
      width: 15,
      height: 20,
    },
  },
  IniciadosText: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XL,
    fontWeight: 400,
    margin: 0,
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.fontXLL,
    },
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
    ["@media (max-width: 590px)"]: {
      fontSize: 40,
    },
  },
  VinagreText: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XLL,
    fontWeight: 400,
    margin: 0,
    ["@media (max-width: 590px)"]: {
      fontSize: 40,
    },
  },
  TextWrapper: {
    margin: "-2rem 0rem 0rem -6rem",
  },
  DateWrapper: {
    marginTop: "1.5rem",
    ["@media (max-width: 872px)"]: {
      marginTop: "3rem",
    },
    ["@media (max-width: 590px)"]: {
      marginTop: "1rem",
    },
  },
  DateText: {
    color: theme.colors.primary.yellow,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XL,
    fontWeight: 400,
    margin: 0,
    ["@media (max-width: 590px)"]: {
      fontSize: theme.fonts.sizes.font2XL,
    },
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
    ["@media (max-width: 590px)"]: {
      width: "90%",
    },
    ["@media (max-width: 500px)"]: {
      width: "92%",
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
    ["@media (max-width: 590px)"]: {
      width: "90%",
    },
    ["@media (max-width: 590px)"]: {
      width: "95%",
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
    ["@media (max-width: 872px)"]: {
      height: 50,
      width: 50,
      objectFit: "contain",
      marginRight: 0,
    },
  },
  FinalText: {
    color: theme.colors.secondary.lightBlue,
    fontFamily: theme.fonts.family.primary,
    fontSize: theme.fonts.sizes.font2XLL,
    fontWeight: 400,
    margin: "20px 0px 0px 0px",
    ["@media (max-width: 872px)"]: {
      fontSize: theme.fonts.sizes.font2XL,
    },
    ["@media (max-width: 590px)"]: {
      margin: "4px 0px 0px 0px",
    },
    ["@media (max-width: 450px)"]: {
      margin: "4px 0px 0px 0px",
    },
  },
  ScoreNumber: {
    color: theme.colors.primary.white,
    fontFamily: theme.fonts.family.tertiary,
    fontSize: theme.fonts.sizes.font3XLL,
    fontWeight: 400,
    margin: "20px 0px 0px 0px",
    ["@media (max-width: 590px)"]: {
      marginRight: 10,
    },
    ["@media (max-width: 450px)"]: {
      margin: "4px 0px 0px 0px",
    },
  },
}));
