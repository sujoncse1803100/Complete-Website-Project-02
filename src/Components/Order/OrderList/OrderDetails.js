import React from "react";

export const OrderDetails = ({ order }) => {
  const cardStyle = {
    width: "22rem",
    margin: "10px",
    border: "none",
    borderRadius: "10px"
    // boxShadow: "0px 4px 80px rgba(0, 0, 0, 0.1)",s
  };

const confirmStyle = {
    width: "100px", 
    height: "50px",
    margin:'15px',
    backgroundColor:'red',
    padding: '10px',
    borderRadius:'10px'
}

  return (
    <div

      className="card mt-5 text-center "
      style={cardStyle}
    >
      <div className="text-cemter d-flex justify-content-between">
        <img
          src={order.icon}
          style={{ height: "50px", width: "50px" }}
          className="cardImage m-3"
          alt=""
        />

        <div style={confirmStyle}>
            <h5>Done</h5>
        </div>
      </div>
      <div className="card-body text-start">
        <h5 className="card-title">{order.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};
