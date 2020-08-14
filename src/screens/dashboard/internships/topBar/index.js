import React, { useState } from "react";
import { Btn, BtnText, Button, TopBar } from "./index.styles";
import { PlusOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import Modal from "../modals/newInternship";

const options = [
  {
    title: "Under Review",
    path: "/internships",
  },
  {
    title: "Live",
    path: "/internships/live",
  },
  {
    title: "Closed",
    path: "/internships/closed",
  },
  {
    title: "Rejected",
    path: "/internships/rejected",
  },
  {
    title: "Reported Applicants",
    path: "/internships/reported",
  },
];

const Topbar = ({ history }) => {
  const [open, setOpen] = useState(false);

  return (
    <TopBar>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {options.map((i, k) => (
          <Btn
            selected={history.location.pathname === i.path}
            key={k}
            to={i.path}
          >
            <BtnText selected={history.location.pathname === i.path}>
              {i.title}
            </BtnText>
          </Btn>
        ))}
      </div>

      <Button onClick={() => setOpen(true)}>
        <PlusOutlined />
        Post Internship
      </Button>

      <Modal open={open} setOpen={setOpen} />
    </TopBar>
  );
};

export default withRouter(Topbar);
