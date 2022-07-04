import Menu from "./components/Menu";
import Title from "./components/Title";
import Text from "./components/Text";
import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import sentiments from "../sentiment.json";

const Main = () => {
  const [dateState, setDateState] = useState(new Date(2021, 3, 1));
  const [sentiment, setSentiment] = useState([0.137, 0.44]);

  const changeDate = (e) => {
    // console.log(e);
    // console.log(moment(e).format("MMMM Do YYYY"));
    setSentiment(sentiments[moment(e).format("MMMM Do YYYY")]);
    setDateState(e);
  };

  const firstLine =
    "-1 indicates extremely negative(bearish) while 1 indicates extremely positive(bullish).";
  const secondLine = "Select a date";
  const thirdLine = `The sentiment on ${moment(dateState).format(
    "MMMM Do YYYY"
  )} was: ${sentiment[0]}`;
  const fourthLine = `and the price change the following day was ${sentiment[1]}%`;
  const fifthLine =
    "Through our research and results seen through sentiment analysis on our project, we have seen that overall people remain bearish about bitcoin. Although consistent changes in the price, up or down does affect the sentiment of people positively or negatively respectively and vice versa.";
  return (
    <div>
      <Menu />
      <Title text="Bitcoin Sentiment" />
      <Text
        moreCss={{
          fontWeight: "300",
          fontSize: "22px",
        }}
        text={firstLine}
      />
      <Text
        moreCss={{
          fontWeight: "300",
          fontSize: "22px",
        }}
        text={secondLine}
      />
      <div style={{ marginLeft: "38%", marginTop: "3%" }}>
        <Calendar
          minDate={new Date(2021, 3, 1)}
          maxDate={new Date(2021, 3, 30)}
          value={dateState}
          onChange={changeDate}
        />
        {/* <p style={{ color: "white" }}>
          Current selected date is{" "}
          <b>{moment(dateState).format("MMMM Do YYYY")}</b>
        </p> */}
      </div>
      <Text
        moreCss={{
          fontWeight: "400",
          fontSize: "24px",
          marginBottom: "1%",
          paddingTop: "1%",
        }}
        text={thirdLine}
      />
      <Text
        moreCss={{
          fontWeight: "400",
          fontSize: "22px",
          marginTop: "0%",
          paddingTop: "0%",
          marginBottom: "10%",
        }}
        text={fourthLine}
      />
      <Text
        moreCss={{
          fontWeight: "400",
          fontSize: "22px",
          marginTop: "0%",
          paddingTop: "0%",
          marginBottom: "8%",
        }}
        text={fifthLine}
      />
      {/* <button className="update" style={buttonCss} onClick={() => onUpdate()}>
        Update
      </button> */}
    </div>
  );
};

export default Main;
