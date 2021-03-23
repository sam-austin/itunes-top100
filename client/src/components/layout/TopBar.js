import React from "react";

import { Layout, Menu } from "antd";
const { Header } = Layout;

const TopBar = props => {

  return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%", padding: 0}}>
        <Menu 
          mode="horizontal" 
          style={{ 
            fontSize: "24px", 
            border: 0, 
            position: "relative",
            display: "flex",
            justifyContent: "center", 
          }}
          theme="dark"
        >
          <Menu.Item key="1" disabled style={{ transform: "rotate(180deg)", margin: "0", padding: "0"}}>
            <div className="vertical-bar"></div>
            <div className="vertical-bar" style={{ transform: "translate(20px,0)" }}></div>
            <div className="vertical-bar" style={{ transform: "translate(40px,0)" }}></div>
            <div className="vertical-bar" style={{ transform: "translate(60px,0)" }}></div>
          </Menu.Item>
          <Menu.Item key="2" disabled style={{ margin: "0 10px", padding: "0", opacity: 1 }}>
            <div className="top-bar-text">
              Top 100 Albums
            </div>
          </Menu.Item>
        </Menu>
      </Header>
  );
};

export default TopBar;
