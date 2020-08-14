import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import SkillsDropDown from "./skillsDropdown";

const Step3 = ({
  Text,
  Row,
  Input,
  HighlightedButton,
  setCurrent,
  current,
  AddNew,
}) => {
  return (
    <>
      <Row style={{ flexWrap: "wrap" }}>
        <div style={{ width: "40%" }}>
          <Text>Interns Responsibilities</Text>
          <Input add addonBefore="1." />
          <AddNew
            style={{
              textAlign: "right",
              margin: "1rem 0",
            }}
          >
            +Add Additional Benefits
          </AddNew>
        </div>
        <div style={{ width: "40%" }}>
          <Text>Interview Questions</Text>
          <Input add addonBefore="1." />
          <AddNew
            style={{
              textAlign: "right",
              margin: "1rem 0",
            }}
          >
            +Add Additional Benefits
          </AddNew>
        </div>
        <div style={{ width: "40%" }}>
          <Text>Requirements From Interns</Text>
          <Input add addonBefore="1." />
          <AddNew
            style={{
              textAlign: "right",
              margin: "1rem 0",
            }}
          >
            +Add Additional Benefits
          </AddNew>
        </div>
      </Row>

      <div style={{ width: "40%" }}>
        <Text>Skills</Text>
        <SkillsDropDown />
      </div>

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

export default Step3;
