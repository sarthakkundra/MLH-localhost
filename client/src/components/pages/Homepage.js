import React from "react";

import { Row, Col } from "antd";

import FullForm from "../Form";
import RemarkItem from '../remarks/RemarkItem'

const Homepage = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <FullForm />
        </Col>
        <Col span={12}>
          <RemarkItem />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
