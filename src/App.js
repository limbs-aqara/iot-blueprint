import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';
import 'antd/dist/antd.min.css';
import './App.css';

const { Header, Content } = Layout;

let node = [{
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  style: {
    fill: '#6BA5D7',
    strokeColor: 'white'
  },
}];

const App = () => {
  return (
    <div className="wrapper-main">
      <Layout>
        <Header />
        <Content>
          <DiagramComponent id="container" width={'100%'} height={'800px'} nodes={node} />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
