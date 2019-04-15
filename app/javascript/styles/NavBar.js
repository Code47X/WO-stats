const NavBarStyles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawerContainer: {
    width: 320,
    height: "100%"
  },
  xContainer: {
    width: "100%",
    textAlign: "right"
  },
  xButton: {
    marginTop: 5,
    marginRight: 5,
    padding: 3
  },
  drawerTitle: {
    margin: "-10px 0px 20px",
    textAlign: "center",
    color: theme.palette.primary.main
  }
});

export default NavBarStyles;
