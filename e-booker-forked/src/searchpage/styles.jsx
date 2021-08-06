import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },

  icon: {
    marginRight: "20px"
  },
  button: {
    marginTop: "50px"
  },
  cardGrid: {
    padding: "20px"
  },
  card: {
    // height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: "10%"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px",
    marginBottom: "0px"
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default useStyles;
