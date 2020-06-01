import React from "react";
import "./App.css";
import { AddDeatils } from "./components/AddDeatils";
import { DisplayDetails } from "./components/DispalyDetails";
import { Col, Row } from "antd";

function App() {
  return (
    <div
      style={{
        margin: "30px",
      }}
    >
      <Row justify="space-between">
        <Col span={12}>
          <AddDeatils />
        </Col>
        <Col span={12}>
          <DisplayDetails />
        </Col>
      </Row>
    </div>
  );
}

export default App;
