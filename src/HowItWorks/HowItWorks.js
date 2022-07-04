import Menu from "./components/Menu";
import Heading from "./components/Heading";
import Text from "./components/Text";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <>
      <Menu />
      <Heading text="How It Works" />
      {/* The 1st Part */}
      <div data-aos="fade-right">
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "400",
            textAlign: "left",
            marginTop: "12%",
          }}
          text="Bitcoin sentiment indicator"
        />
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "300",
            textAlign: "left",
            marginRight: "25%",
          }}
          text="Indicates the sentiment of the market i.e. the people about bitcoin using the tweets to analyse the sentiment and then shows us the sentiment which can be helpful in aiding in decisions about whether to buy or sell bitcoin."
        />
      </div>
      {/* The 2nd Part */}
      <div data-aos="fade-left">
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "400",
            textAlign: "right",
            marginTop: "20%",
          }}
          text="Why Measure Sentiment"
        />
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "300",
            textAlign: "right",
            marginLeft: "25%",
          }}
          text="Measuring the sentiment succesfully can give us an indication of where the market is moving, thus helping us to predict the future prices of bitcoin."
        />
      </div>
      {/* The 3rd Part */}
      <div data-aos="fade-right">
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "400",
            textAlign: "left",
            marginTop: "20%",
          }}
          text="How we measure sentiment"
        />
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "300",
            textAlign: "left",
            marginRight: "25%",
          }}
          text="We measure the sentiment by passing the tweets through an ML Model which in turn tells us the sentiment of the tweets."
        />
      </div>
      {/* The 4th Part */}
      <div data-aos="fade-left">
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "400",
            textAlign: "right",
            marginTop: "20%",
          }}
          text="How accurate are the sentiments"
        />
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "300",
            textAlign: "right",
            marginLeft: "25%",
          }}
          text="The accuracy of the sentiments are not to be taken as word of law as the market is wildly volatile and our ML Model is far from perfect."
        />
      </div>
      {/* The 5th Part */}
      <div data-aos="fade-right">
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "400",
            textAlign: "left",
            marginTop: "20%",
          }}
          text="Other factors"
        />
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "300",
            textAlign: "left",
            marginRight: "25%",
          }}
          text="The prices of bitcoin though dependent on the sentiment of public towards it, is also dependent on various other factors."
        />
      </div>
      {/* The 6th Part */}
      <div data-aos="fade-left">
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "400",
            textAlign: "right",
            marginTop: "20%",
          }}
          text="What are these other factors"
        />
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "300",
            textAlign: "right",
            marginLeft: "25%",
          }}
          text="Other factors include things like its acceptance by various traditional sectors or government, big companies or investors who take a bet on it by investing in it, how much the public trusts its authenticity, further development in related sectors, liquidity pool, supply & demand, AMM etc."
        />
      </div>
      {/* The 7th Part */}
      <div data-aos="fade-right">
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "400",
            textAlign: "left",
            marginTop: "20%",
          }}
          text="Some findings"
        />
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "300",
            textAlign: "left",
            marginRight: "25%",
          }}
          text="Through our research and results seen through sentiment analysis on our project, we have seen that overall people remain bearish about bitcoin. Although consistent changes in the price, up or down does affect the sentiment of people positively or negatively respectively and vice versa."
        />
      </div>
      {/* The 8th Part */}
      <div data-aos="fade-left">
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "400",
            textAlign: "right",
            marginTop: "20%",
          }}
          text="Further scope"
        />
        <Text
          moreCss={{
            fontSize: "24px",
            fontWeight: "300",
            textAlign: "right",
            marginLeft: "25%",
            paddingBottom: "10%",
          }}
          text="Our project can further be expanded to take notice of other factors that influence the price of bitcoin and measure them too, to take live data from twitter and analyze it real-time and also can be expanded to other cryptocurrencies."
        />
      </div>
    </>
  );
};

export default HowItWorks;
