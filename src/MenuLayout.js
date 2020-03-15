import React, { Component } from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export class MenuLayout extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header style={{backgroundColor: 'black'}}>Header</Header>
          <Layout>
            <Sider style={{backgroundColor: 'red'}}>Sider</Sider>
            <Content style={{backgroundColor: 'green'}}>Content</Content>
          </Layout>
          <Footer style={{backgroundColor: 'black'}}>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default MenuLayout;
