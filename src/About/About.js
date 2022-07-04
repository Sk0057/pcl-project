import Heading from "./components/Heading";
import Menu from "./components/Menu";
import Para from "./components/Text";

const About = () => {
  return (
    <>
      <Menu />
      <Heading text="About" />
      <Para
        moreCss={{ fontSize: "24px", fontWeight: "400", marginTop: "7%" }}
        text="Shubham Kumar-19BCAR3013"
      />
      <Para
        moreCss={{ fontSize: "24px", fontWeight: "400" }}
        text="Samar Hussain-19BCAR03012"
      />
      <Para
        moreCss={{ fontSize: "24px", fontWeight: "400" }}
        text="Kashif Hussain-19BCAR3036"
      />
      <Para
        moreCss={{ fontSize: "24px", fontWeight: "400" }}
        text="A R Mohammed Rayyan-19BCAR03038"
      />
      <Para
        moreCss={{ fontSize: "24px", fontWeight: "400" }}
        text="Saif Ali-19BCAR03044"
      />
      <Para
        moreCss={{ fontSize: "16px", fontWeight: "400" }}
        text="The sentiments are not to be taken seriously"
      />
      <Para
        moreCss={{ fontSize: "12px", fontWeight: "300", paddingTop: "0%" }}
        text="This is a project made by 6th sem students of Jain University"
      />
    </>
  );
};

export default About;
