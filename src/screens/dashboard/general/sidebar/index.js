import React,{useState} from 'react'
import {  
  Name,
  Email,
  Slider,
  View,
  Avatar,
} from './index.styles'
import {withRouter} from 'react-router-dom'

const Sidebar = ({width,collapsed,Btn,BtnText,history}) => {
  const [current, setCurrent] = useState(0);

  const options = [
    {
      title: "Dashboard",
      paths: ["/"],
    },
    {
      title: "Gigs",
      paths: ["/gigs"],
    },
    {
      title: "Internships",
      paths: [
        "/internships",
        "/internships/live",
        "/internships/closed",
        "/internships/rejected",
        "/internships/reported"
      ],
    },
    {
      title: "Campus Marketing",
      paths: ["/campus-marketing"],
    },
    {
      title: "Student Offers",
      paths: ["/student-offers"],
    },
    {
      title: "Student Verification",
      paths: ["/student-verification"],
    },
    {
      title: "Support",
      paths: ["/support"],
    },
    {
      title: "Payment",
      paths: ["/payment"],
    },
    {
      title: "Notifications",
      paths: ["/notifications"],
    },
  ];

    return (
      <Slider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={width ? 0 : 80}
        width={240}
        style={{
          width: 240,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: 240,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar />
        </div>
        <Name>Mayank Uppal</Name>
        <Email>mayankuppal@gmail.com</Email>
        <View>
          {options.map((i, k) => (
            <Btn
              onClick={() => {
                setCurrent(k);
                history.push(i.paths[0]);
              }}
              selected={i.paths.includes(history.location.pathname)}
              key={k}
              to={i.path}
            >
              <BtnText selected={i.paths.includes(history.location.pathname)}>
                {i.title}
              </BtnText>
            </Btn>
          ))}
        </View>
      </Slider>
    );
}

export default withRouter(Sidebar)
