import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
  },
  dateBox: {
    minWidth: 100,
    height: "auto",
    backgroundColor: "#1C7ED8",
  },
  dateTypography: {
    color: "#fff",
    textAlign: "left",
    marginLeft: "25%",
    marginTop: "30%",
  },
  cardContent: {
    flex: "1 0 auto",
  },
}));
