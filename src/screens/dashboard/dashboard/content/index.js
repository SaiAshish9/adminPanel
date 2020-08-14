import React, { useState } from "react";
import {
  Container,
  Row,
  Workers,
  Section12,
  Section21,
  Section22,
  Text,
  Highlight,
} from "./index.styles";
import Chart from "./chart";
import Remainder from "./remainder";
import { DownOutlined } from "@ant-design/icons";
import TopBar from './topBar'

const requests = [
  {
    color: "#274f8f",
    bg: "#e8f0fd",
    content: "Gigs",
  },
  {
    color: "#921564",
    bg: "#fde7f3",
    content: "Student Offers",
  },
  {
    color: "#63308f",
    bg: "#f4e8fe",
    content: "Payments",
  },
  {
    color: "#20797f",
    bg: "#e4f7fb",
    content: "Support",
  },
  {
    color: "#8f2020",
    bg: "#fce8e7",
    content: "Internships",
  },
  {
    color: "#ae8351",
    bg: "#fdefe2",
    content: "Student Verification ",
  },
  {
    color: "#205d34",
    bg: "#e7f4ea",
    content: "Campus Marketing",
  },
];



const Content = () => {
  return (
    <Container>
      <TopBar/>
      <Row>
        <Workers>
          <Row style={{ padding: "0 1.2rem" }}>
            <Text>Total Workers</Text>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Highlight color="#29a746" bg="#e4f4e8">
                2345 Users Acquired
              </Highlight>
              <Highlight
                color="#f1ac5d"
                bg="rgba(241,172,93,0.1)"
                style={{ marginLeft: 15 }}
              >
                Last 7 Days
                <DownOutlined style={{ marginLeft: 5 }} />
              </Highlight>
            </div>
          </Row>
          <Chart
            data={[31, 40, 28, 51, 42, 59, 52, 72, 31, 40, 28, 51]}
            height={220}
            color="#f1ac5d"
            bg="rgba(241,172,93,0.1)"
          />
        </Workers>
        <div
          style={{
            display: "flex",
            width: "38%",
            marginTop: 36,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Section12>
            <Row style={{ padding: "1.2rem" }}>
              <Text>Verified Workers</Text>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Highlight color="#29a746" bg="#e4f4e8">
                  2345 Users
                </Highlight>
                <Highlight
                  color="#3c36ad"
                  bg="#e3e2f3"
                  style={{ marginLeft: 15 }}
                >
                  Last 7 Days
                  <DownOutlined style={{ marginLeft: 5 }} />
                </Highlight>
              </div>
            </Row>
            <div style={{ position: "relative", bottom: 50 }}>
              <Chart
                data={[110, 171, 138, 120, 142, 159]}
                height={110}
                bg="#e3e2f3"
                color="#3c36ad"
              />
            </div>
          </Section12>
          <Section12>
            <Row style={{ padding: "1.2rem" }}>
              <Text>Company Profiles</Text>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Highlight color="#29a746" bg="#e4f4e8">
                  2345 Users
                </Highlight>
                <Highlight
                  color="#df3939"
                  bg="rgba(223,57,57,0.1)"
                  style={{ marginLeft: 15 }}
                >
                  Last 7 Days
                  <DownOutlined style={{ marginLeft: 5 }} />
                </Highlight>
              </div>
            </Row>
            <div style={{ position: "relative", bottom: 50 }}>
              <Chart
                data={[110, 120, 142, 175, 159, 138]}
                height={110}
                bg="rgba(223,57,57,0.1)"
                color="#df3939"
              />
            </div>
          </Section12>{" "}
        </div>
      </Row>
      <Row style={{ paddingTop: 25 }}>


        <Remainder Container={Section21} Text={Text} />

      


        <Section22 style={{ padding: "1rem 2rem" }}>
          <Text>Pending Requests</Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {requests.map((i, k) => (
              <div
                key={k}
                style={{
                  width: 135,
                  height: 76,
                  margin: 13,
                  borderRadius: 12,
                  background: i.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 8px",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: 14,
                    color: i.color,
                    lineHeight: 1.29,
                    fontFamily: "Montserrat",
                    margin: 0,
                  }}
                >
                  {i.content}
                </p>
                <div
                  style={{
                    minWidth: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.09)",
                    fontWeight: 500,
                    // marginLeft:'10px',
                    fontFamily: "Montserrat",
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: i.color,
                  }}
                >
                  12
                </div>
              </div>
            ))}
          </div>
        </Section22>
      </Row>
    </Container>
  );
};

export default Content;
