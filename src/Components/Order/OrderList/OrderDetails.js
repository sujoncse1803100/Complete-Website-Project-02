import React from "react";

export const OrderDetails = ({ order }) => {
  const cardStyle = {
    width: "22rem",
    margin: "10px",
    border: "none",
    borderRadius: "10px",
    // boxShadow: "0px 4px 80px rgba(0, 0, 0, 0.1)",s
  };

  const statusmStyle = {
    width: "100px",
    backgroundColor: order.statusColor,
  };

  return (
    <div className="card mt-5 text-center " style={cardStyle}>
      <div className="text-cemter d-flex justify-content-between align-items-center">
        <div className="text-cemter d-flex justify-content-between">
          <img
            src={`data:image/png;base64,${order.image}`}
            style={{ width: "50px" }}
            className="cardImage m-3"
            alt=""
          />
        </div>
        <button className="btn" style={statusmStyle}>
          {order.status.selectedStatus}
        </button>
      </div>
      <div className="card-body text-start">
        <h5 className="card-title">Project : {order.orderName}</h5>
        <p className="card-text">Name : {order.name}</p>
        <p className="card-text">Email : {order.email}</p>
        <p className="card-text">Price : ${order.price}</p>
      </div>
    </div>
  );
};
