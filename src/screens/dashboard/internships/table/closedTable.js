import React from "react";
import { Container, Thead, Head, Row, Data, Highlight } from "./index.styles";
import { Divider } from "antd";

const Table = () => {
  return (
    <Container>
      <Thead>
        <Head style={{ width: "10%" }}>S.No</Head>
        <Head style={{ width: "20%" }}>Date</Head>
        <Head style={{ width: "20%" }}>Company Name</Head>
        <Head style={{ width: "20%" }}>Profile</Head>
        <Head style={{ width: "20%" }}>Deadline</Head>
      </Thead>
      <Divider style={{ margin: 0 }} />
      {[...Array(8).keys()].map((i, k) => (
        <div key={k} style={{ width: "100%" }}>
          <Row
            style={{
              width: "100%",
              margin: "0 2rem",
            }}
          >
            <Data style={{ width: "10%" }}>00000{k + 1}</Data>
            <Data style={{ width: "20%", position: "relative", right: "0.1%" }}>
              22nd August 2020
            </Data>
            <Data
              style={{
                color: "#5da7f1",
                width: "20%",
                cursor: "pointer",
                position: "relative",
                right: "0.5%",
              }}
            >
              Shiv Kumar Rai Gopal
            </Data>
            <Data
              style={{
                width: "20%",
                cursor: "pointer",
                position: "relative",
                right: "1.2%",
              }}
            >
              Business Development (Sales)
            </Data>
            <Row
              style={{
                padding: 0,
                justifyContent: "space-between",
                width: "23%",
              }}
            >
              <Data
                style={{
                  position: "relative",
                  right: "6%",
                }}
              >
                22nd January 2020
              </Data>
              <Row>
                <Highlight bg="#e8f0fd" color="#274f8f">
                  View
                </Highlight>
              </Row>
            </Row>
          </Row>
          {k !== 7 && <Divider style={{ margin: "0 2rem" }} />}
        </div>
      ))}
    </Container>
  );
};

export default Table;
