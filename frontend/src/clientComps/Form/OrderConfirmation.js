import React from "react";
import { useParams } from "react-router-dom";
import { Card, Typography } from "antd";
import left from "./../../Media/StarLeft.png";
import right from "./../../Media/StarRight.png";
const { Title } = Typography;

export const OrderConfirmation = () => {
  const { orderNumber } = useParams();
  return (
    <div className="flex flex-col justify-center items-center align-middle">
      <Title level={2}>Confirmation</Title>
        <Card style={{width: 600, border:'#c0a58e', borderStyle:'solid'}}>
      <div className="flex flex-row justify-center align-center items-center">
        <img alt='test' src={left} className="w-24" />
        <h1 className="text-3xl font-mono mt-10">Thank You!</h1>
        <img alt='test1' src={right} className="w-24" />
      </div>
      <div className="flex flex-col justify-center align-center items-center">
        <Title level={4}>Your order number is: {orderNumber}</Title>
        <p className="w-72">
          If you selected add on's like Balloons, Vinyl or Fringe Garland a
          member of our team will reach out to discuss details and finalize
          design.
        </p>
        <div class="mt-12">
          <Title level={5}>
            Questions? Call or text us at{" "}
            <a href="tel:+1234567890">707-238-1111</a>
          </Title>
        </div>
      </div>
      </Card>
    </div>
  );
};
