import React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Order #{orderId}</h1>

    <p>
      Payment request of <b>{totalAmount} $</b>. Path{" "}
      <a href={paymentUrl}> this link</a> to make a payment.
    </p>
  </div>
);
