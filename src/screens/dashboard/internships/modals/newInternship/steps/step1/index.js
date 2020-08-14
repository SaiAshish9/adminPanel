import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import Dropdown from "./dropdown";
import LocationDropdown from "./locationDropdown";

const profileOptions = [
  "Business Development (Sales)",
  "Campus Ambassador",
  "Web Development",
  "Operations",
  "Human Resources",
  "Digital Marketing",
  "Social Media Marketing",
  "Marketing",
  "Content Writing",
  "Law/Legal",
  "Graphic Design",
  "Mobile App Development",
  "Other",
];

const internshipOptions = ["In Office", "Work From Home"];

const Step1 = ({
  Text,
  Button,
  Row,
  Input,
  HighlightedButton,
  setCurrent,
  current,
}) => {
  const [profiles, setProfiles] = useState([]);
  const [types, setTypes] = useState([]);
  const [selected, isSelected] = useState(false);

  return (
    <>
      <Text>Select Internship Profile</Text>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {profileOptions.map((i, k) => (
          <Button
            onClick={() => {
              if (profiles.includes(i)) {
                setProfiles(profiles.filter((x) => x !== i));
              } else {
                setProfiles([...profiles, i]);
              }
            }}
            inverted={profiles.includes(i)}
            key={k}
          >
            {i}
          </Button>
        ))}
      </div>

      <Row style={{ marginTop: 30 }}>
        <div>
          <Text>Select Internship Type</Text>
          <Row>
            {internshipOptions.map((i, k) => (
              <Button
                onClick={() => {
                  if (types.includes(i)) {
                    setTypes(types.filter((x) => x !== i));
                  } else {
                    setTypes([...types, i]);
                  }
                }}
                inverted={types.includes(i)}
                style={{
                  padding: "13px 27px",
                }}
                key={k}
              >
                {i}
              </Button>
            ))}
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text>Number of openings</Text>
          <Input />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text>Internship Duration</Text>
          <Row>
            <Input style={{ width: "40%" }} />
            <div
              style={{
                width: "60%",
                paddingLeft: "5%",
                height: "2.7rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Dropdown />
            </div>
          </Row>
        </div>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text>Internship Start Date</Text>
          <Input />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text>Last Date To Apply</Text>
          <Input />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text>Internship Location</Text>
          <Button
            onClick={() => {
              isSelected(!selected);
            }}
            inverted={selected}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            All India
          </Button>{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "6.5rem",
            position: "relative",
            right: "7.5%",
          }}
        >
          <Text style={{ color: "#000", margin: "0 10px", opacity: 0.4 }}>
            OR
          </Text>
          <LocationDropdown />
          {/* <Input style={{ marginTop: 0, height: "5rem" }} /> */}
        </div>
      </Row>
      {current !== 3 && (
        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <HighlightedButton
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

export default Step1;
