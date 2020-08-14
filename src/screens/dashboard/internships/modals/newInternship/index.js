import React, { useState } from "react";
import {
  Modal,
  Content,
  Text,
  Button,
  Row,
  Input,
  HighlightedButton,
  AddNew,
} from "./index.styles";
import LeftArrow from "../../../../../assets/svgs/arrowLeft.svg";
import RightArrow from "../../../../../assets/svgs/arrowRight.svg";

import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Review from "./steps/review";

const App = ({ open, setOpen }) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      {current !== 0 && (
        <img
          onClick={() => {
            setCurrent(current - 1);
          }}
          src={LeftArrow}
          style={{
            position: "absolute",
            left: "4rem",
            top: "40%",
            cursor: "pointer",
            zIndex: 1000000000,
          }}
          alt="previous"
        />
      )}

      {current !== 3 && (
        <img
          onClick={() => {
            setCurrent(current + 1);
          }}
          src={RightArrow}
          style={{
            position: "absolute",
            right: "4rem",
            cursor: "pointer",
            top: "40%",
            zIndex: 1000000000,
          }}
          alt="next"
        />
      )}

      <Modal
        className="newInternshipModal"
        title={current !== 3 ? "Create Internship" : "Review Internship"}
        centered
        visible={open}
        width={"80%"}
        footer={null}
        onCancel={() => setOpen(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Content>
          {current === 0 && (
            <Step1
              Button={Button}
              Text={Text}
              HighlightedButton={HighlightedButton}
              Row={Row}
              Input={Input}
              current={current}
              setCurrent={setCurrent}
            />
          )}

          {current === 1 && (
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
          )}

          {current === 2 && (
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
          )}

          {current === 3 && (
            <Review
              Button={Button}
              Text={Text}
              HighlightedButton={HighlightedButton}
              Row={Row}
              Input={Input}
              current={current}
              AddNew={AddNew}
              setCurrent={setCurrent}
            />
          )}
        </Content>
      </Modal>
    </>
  );
};

export default App;
