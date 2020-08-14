import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Type from '../type'

const data = [
  "Does this Internship come with a Pre Placement Offer?",
  "Will you offer Certificate of Internship?",
];

const Step2 = ({
  Text,
  Button,
  Row,
  Input,
  HighlightedButton,
  setCurrent,
  current,
  AddNew,
}) => {
  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");

  return (
    <>
      <Row>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text>Stipend Type</Text>
          {/* <Input /> */}
          <Type />
        </div>
        <div>
          <Text>Amount</Text>
          <Input />
        </div>
        <div style={{ width: "40%" }}>
          <Text>Additional Benefits</Text>
          <Input add addonBefore="1." />
        </div>
      </Row>
      <AddNew
        style={{
          textAlign: "right",
          margin: "1rem 0",
        }}
      >
        +Add Additional Benefits
      </AddNew>

      {data.map((i, k) => (
        <div key={k} style={{ width: "47%", marginTop: "2rem" }}>
          <Text>{i}</Text>
          <Row style={{ justifyContent: "flex-start" }}>
            <Button
              onClick={() => {
                if (k === 0) {
                  setSelected("yes");
                } else {
                  setSelected1("yes");
                }
              }}
              inverted={k === 0 ? selected === "yes" : selected1 === "yes"}
              style={{
                padding: "13px 27px",
                width: "30%",
                textAlign: "center",
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                if (k === 0) {
                  setSelected("no");
                } else {
                  setSelected1("no");
                }
              }}
              inverted={k === 0 ? selected === "no" : selected1 === "no"}
              style={{
                padding: "13px 27px",
                width: "30%",
                textAlign: "center",
              }}
            >
              No
            </Button>
          </Row>
        </div>
      ))}

      {current !== 3 && (
        <Row style={{ justifyContent: "center", marginTop: "2rem" }}>
          <HighlightedButton
            style={{ margin: "0 10px " }}
            inverted
            onClick={() => {
              setCurrent(current - 1);
            }}
          >
            <LeftOutlined
              style={{
                marginRight: 10,
                fontSize: "1rem",
              }}
            />
            Go Back
          </HighlightedButton>
          <HighlightedButton
            style={{ margin: "0 10px " }}
            onClick={() => {
              setCurrent(current + 1);
            }}
          >
            Continue
            <RightOutlined
              style={{
                marginLeft: 10,
                fontSize: "1rem",
              }}
            />
          </HighlightedButton>
        </Row>
      )}
    </>
  );
};

export default Step2;
