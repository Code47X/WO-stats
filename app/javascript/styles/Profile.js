const ProfileStyles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    marginTop: "56px",
    height: "10000px",
    padding: theme.spacing.unit * 2,

    [theme.breakpoints.up("sm")]: {
      marginTop: "64px"
    }
  }
});

export default ProfileStyles;
