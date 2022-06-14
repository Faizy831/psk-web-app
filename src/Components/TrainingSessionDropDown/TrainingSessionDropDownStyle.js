import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  DropDownContianer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    ["@media (max-width: 659px)"]: {
      justifyContent: "center",
    },
  },
  InputWrapper: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  DropDownWrapper: {
    display: "flex",
    alignItems: "center",
    ["@media (max-width: 908px)"]: {
      display: "initial"
    },
  },
  DropDown: {
    backgroundColor: "white",
    width: 400,
    height: 50,
    borderRadius: 3,
    color: "red",
    ["@media (max-width: 413px)"]: {
      width: 300,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  DropDownLable: {
    fontFamily: theme.fonts.family.tertiary,
    color: theme.colors.primary.yellow,
    fontSize: theme.fonts.sizes.font3XLL,
    fontWeight: 400,
    marginTop: 10,
  },
  ButtonWrapper: {
    marginLeft: 60,
    ["@media (max-width: 659px)"]: {
      margin: "55px 0px 0px 10px",
    },
    ["@media (max-width: 609px)"]: {
      margin: "20px 0px 20px 10px",
    },
  },
  Link: {
    textDecoration: "none",
  },
}));
