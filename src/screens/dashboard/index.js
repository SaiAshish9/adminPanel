import React,{ useState} from 'react'
import {Switch,Route} from 'react-router-dom'
import { Container, Row,Btn,BtnText } from "./index.styles";
import Home from './dashboard'
import Internships from './internships'
import SideBar from "./general/sidebar";
import TopBar from "./general/topbar";
import { useMediaQuery } from "react-responsive";

const Dashboard = () => {


  const [collapsed, setCollapsed] = useState(false);

  const width = useMediaQuery({
    query: "(max-width:768px)",
  });

  const toggleCollapsed = () => setCollapsed(!collapsed);


    return (
      <Container>
        <SideBar
          collapsed={collapsed}
          width={width}
          Btn={Btn}
          BtnText={BtnText}
        />
        <div style={{ width: "100%" }}>
          <TopBar
            collapsed={collapsed}
            toggleCollapsed={toggleCollapsed}
            Row={Row}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/internships" component={Internships} />
          </Switch>
        </div>
      </Container>
    );
}

export default Dashboard
