import React from "react";
import Step1 from "../step1";
import Step2 from "../step2";
import Step3 from "../step3";

const Review = ({
  Text,
  Button,
  Row,
  Input,
  HighlightedButton,
  setCurrent,
  current,
  AddNew
}) => {
  return (
    <>
      <Step1
        Button={Button}
        Text={Text}
        HighlightedButton={HighlightedButton}
        Row={Row}
        Input={Input}
        current={current}
        AddNew={AddNew}
        setCurrent={setCurrent}
      />
      <div style={{margin:"2rem 0"}}>
        <Step2
          Button={Button}
          Text={Text}
          HighlightedButton={HighlightedButton}
          Row={Row}
          Input={Input}
          current={current}
          AddNew={AddNew}
          setCurrent={setCurrent}
        />
      </div>
      <div style={{margin:"2rem 0"}}>
      <Step3
        Button={Button}
        Text={Text}
        HighlightedButton={HighlightedButton}
        Row={Row}
        Input={Input}
        current={current}
        AddNew={AddNew}
        setCurrent={setCurrent}
      />
      </div>
      <Row style={{ justifyContent: "center", marginTop: "2rem" }}>
        <HighlightedButton
          inverted
          style={{
            color: "#f70a0a",
            border: "2px solid #f70a0a",
            background: "transparent",
            margin: "0 10px ",
            textTransform: "none",
            fontSize: 22,
            fontWeight: 500,
          }}
          onClick={() => {}}
        >
          Reject
        </HighlightedButton>
        <HighlightedButton
          inverted
          style={{
            color: "#0ca220",
            border: "2px solid #0ca220",
            background: "transparent",
            margin: "0 10px ",
            textTransform: "none",
            fontSize: 22,
            fontWeight: 500,
          }}
          onClick={() => {}}
        >
          Approve
        </HighlightedButton>
      </Row>
    </>
  );
};

export default Review;
