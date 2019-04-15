const ProfileStyles = theme => ({
  content: {
    marginTop: "56px",
    height: "10000px",
    padding: theme.spacing.unit * 2,
    paddingTop: "30px",

    [theme.breakpoints.up("sm")]: {
      marginTop: "64px"
    }
  },
  basicContainer: {
    width: "100%",
    maxWidth: "1600px",
    margin: "0px auto 70px"
  },
  containerTitle: {
    marginBottom: "15px"
  },
  basicPaper: {
    padding: "20px 0px",
    width: "99%", // Bugfix so that recharts responsive container works properly
    margin: "auto"
  },
  basicCounter: {
    width: "200px",
    height: "200px",
    margin: "auto",
    backgroundColor: "grey",
    borderRadius: "15px",

    [theme.breakpoints.up("sm")]: {
      width: "140px",
      height: "140px"
    }
  },
  counterTitle: {
    textAlign: "center",
    paddingTop: "20px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem"
    }
  },
  counterNumber: {
    textAlign: "center",
    fontSize: "5rem",
    marginTop: "10px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "3.2rem",
      marginTop: "0px"
    }
  }
});

export default ProfileStyles;
