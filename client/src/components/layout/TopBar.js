import React from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from 'antd';
const { Header } = Layout;

const TopBar = ({ user }) => {

  return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%',  backgroundColor: 'white', borderBottom: '3px', padding: 0}}>
        <Menu mode="horizontal" style={{ fontSize: "16px", border: 0 }} >
          <Menu.Item key="1" style={{float: "left"}}>
            <Link to="/">
              iTunes Top 100 Albums
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
  );
};

export default TopBar;
