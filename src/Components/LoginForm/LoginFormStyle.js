import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  LoginContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
  },
  InputLable: {
    fontFamily: theme.fonts.family.tertiary,
    color: theme.colors.primary.yellow,
    fontSize: theme.fonts.sizes.font3XLL,
    fontWeight: 400,
    "&:focus": {
      color: "red ",
    },
  },
  DropDownContianer: {
    paddingTop: "2rem",
  },
  DropDown: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 3,
    color: "red",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  DropDownLable: {
    fontFamily: theme.fonts.family.tertiary,
    color: theme.colors.primary.yellow,
    fontSize: theme.fonts.sizes.font3XLL,
    fontWeight: 400,
  },
  ButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "3rem",
    "& a": {
      textDecoration: "none",
    },
  },
  Button: {
    "&.MuiButton-root": {
      backgroundColor: "#E2DD00 !important",
      width: 200,
      height: 50,
      fontSize: 30,
      fontWeight: 500,
      fontFamily: theme.fonts.family.tertiary,
    },
    "&:hover": {
      backgroundColor: "#E2DD00 !important",
    },
  },
}));
