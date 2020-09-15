import React from "react";

import { Row, Col } from "antd";

import FullForm from "../Form";
import Remarks from '../remarks/Remarks'

const Homepage = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <FullForm />
        </Col>
        <Col span={12}>
          <Remarks />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
