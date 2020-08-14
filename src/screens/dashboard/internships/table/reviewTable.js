import React from "react";
import { Container, Thead, Head, Row, Data, Highlight } from "./index.styles";
import { Divider } from "antd";
import { FiTrash2 } from "react-icons/fi";

const Table = () => {
  return (
    <Container>
      <Thead>
        <Head style={{ width: "10%" }}>S.No</Head>
        <Head style={{ width: "20%" }}>Date</Head>
        <Head style={{ width: "20%" }}>Company Name</Head>
        <Head style={{ width: "40%" }}>Profile</Head>
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
            
            <Row
              style={{
                padding: 0,
                justifyContent: "space-between",
                width: "43%",
              }}
            >
              <Data
                style={{
                  position: "relative",
                  right: "3%",
                }}
              >
                Business Development (Sales)
              </Data>
              <Row>
                <Highlight bg="#e8f0fd" color="#274f8f">
                  View
                </Highlight>
                <Highlight bg="#e7f4ea" color="#205d34">
                  Approve
                </Highlight>
                <div
                  style={{
                    borderRadius: "50%",
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    background: "#fde8e8",
                    cursor: "pointer",
                  }}
                >
                  <FiTrash2
                    style={{
                      color: "#e51313",
                    }}
                  />
                </div>
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
