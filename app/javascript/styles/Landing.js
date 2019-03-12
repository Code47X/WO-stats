import LandingBg from "../img/landing-bg.jpg";

const LandingStyles = theme => ({
  hero: {
    width: "100%",
    height: "80vh",
    backgroundImage: `url(${LandingBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  colorOverlay: {
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.80)"
  },
  heroContent: {
    position: "absolute",
    top: "33%",
    left: "10%"
  },
  heroText: {
    fontSize: "3rem",
    color: "white",
    marginBottom: "20px"
  },
  mainContent: {
    margin: "-40px 30px 0px"
  },
  paper: {
    width: "100%",
    padding: "60px 30px"
  },
  feature: {
    textAlign: "center",
    width: "400px"
  },
  avatar: {
    marginTop: "40px",
    height: "120px",
    width: "120px",
    margin: "auto",
    backgroundColor: theme.palette.primary.main
  },
  icon: {
    height: "80px",
    width: "80px"
  },
  featureTitle: {
    margin: "40px 0px"
  },
  featureText: {
    textAlign: "justify",
    textAlignLast: "center"
  },
  paperDivider: {
    margin: "60px 0px"
  },
  about: {
    width: "660px",
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "25px",
    padding: "40px 60px"
  },
  aboutTitle: {
    marginBottom: "40px",
    color: "white"
  },
  aboutText: {},
  aboutDivider: {
    margin: "40px 0px"
  },
  demoButton: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: "10px"
  }
});

export default LandingStyles;
