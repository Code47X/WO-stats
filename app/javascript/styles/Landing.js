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
  }
});

export default LandingStyles;
