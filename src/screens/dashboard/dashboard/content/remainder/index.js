import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { List } from "./index.styles";

const data = [
  {
    date: "22nd Aug 2020",
    task: "Business Development",
  },
  {
    date: "12th May 2020",
    task: "Complete Requests",
  },
  {
    date: "12th May 2020",
    task: "Complete Options",
  },
  {
    date: "12th May 2020",
    task: "Meeting",
  },
  {
    date: "12th May 2020",
    task: "Operations",
  },
  {
    date: "12th May 2020",
    task: "Data Moderations",
  },
];

const Remainder = ({ Container, Text }) => {
  return (
    <Container style={{ padding: "1rem 2rem" }}>
      <Text>Remainder</Text>

      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <p
          style={{
            width: "30%",
            fontSize: 14,
            opacity: 0.5,
            lineHeight: 1.29,
            color: "#333e49",
            fontWeight: 500,
          }}
        >
          Date
        </p>
        <p
          style={{
            width: "30%",
            fontSize: 14,
            opacity: 0.5,
            lineHeight: 1.29,
            color: "#333e49",
            fontWeight: 500,
          }}
        >
          Task
        </p>
      </div>

      <List style={{ overflowX: "hidden", overflowY: "scroll", width: "100%" }}>
        {data.map((i, k) => (
          <div
            key={k}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              borderBottom:
                k !== data.length - 1 ? "1px solid #f4f4f4" : "none",
            }}
          >
            <p
              style={{
                width: "30%",
                position: "relative",
                top: 5,
                fontSize: 12,
                lineHeight: 1.25,
                color: "#333e49",
                fontWeight: 500,
              }}
            >
              {i.date}
            </p>
            <div
              style={{
                width: "70%",
                display: "flex",
                position: "relative",
                top: 5,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  lineHeight: 1.25,
                  color: "#333e49",
                  fontWeight: 500,
                  width: "70%",
                }}
              >
                {i.task}
              </p>
              <div style={{ display: "flex", alignItems: "center !important" }}>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 500,
                    lineHeight: 1.22,
                    color: "#205d34",
                    background: "#e7f4ea",
                    padding: "4px 11px",
                    borderRadius: 3,
                    cursor: "pointer",
                  }}
                >
                  Done
                </p>
                <FiTrash2
                  style={{
                    color: "#cf0000",
                    cursor: "pointer",
                    marginLeft: 10,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Remainder;
