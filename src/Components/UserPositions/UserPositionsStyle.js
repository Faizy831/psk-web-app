import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "5rem 0rem 1rem 0rem",
    ["@media (max-width: 590px)"]: {
      padding: "3rem 0rem 3rem 0rem",
    },
  },
}));
