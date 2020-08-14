import React, { useState } from "react";
import {Btn,BtnText,TopBar} from "./index.styles";

const options = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "User Profiles",
    path: "/",
  },
  {
    title: "Company Profiles",
    path: "/",
  },
  {
    title: "Remainders",
    path: "/",
  },
];

const Topbar = () => {
  const [current, setCurrent] = useState(0);

  return (
    <TopBar>
      {options.map((i, k) => (
        <Btn
          onClick={() => {
            setCurrent(k);
          }}
          selected={current === k}
          key={k}
          to={i.path}
        >
          <BtnText selected={current === k}>{i.title}</BtnText>
        </Btn>
      ))}
    </TopBar>
  );
};

export default Topbar;
