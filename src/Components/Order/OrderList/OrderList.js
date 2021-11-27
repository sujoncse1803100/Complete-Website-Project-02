import React, { useContext, useEffect, useState } from "react";
import { OS_Header } from "../../Shared/OS_Header/OS_Header";
import { OrderSidebar } from "../OrderSidebar/OrderSidebar";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import { OrderDetails } from "./OrderDetails";
import { UserContext } from "../../../App";

// const orderList = [
//   {
//     icon: service1,
//     title: "Web & Mobile Design",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?",
//   },
//   {
//     icon: service2,
//     title: "Graphic Design",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?",
//   }

// ];

export const OrderList = () => {
  const [loggedInsUser, setLoggedInUser] = useContext(UserContext);
  const [orderList, setOrdeList] = useState([]);

  useEffect(() => {
      try {
        fetch("https://damp-eyrie-90120.herokuapp.com/particularUserOrderList", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: loggedInsUser.email }),
        })
          .then((res) => res.json())
          .then((result) => setOrdeList(result));
      } catch (err) {
        alert(err);
      }
  }, [orderList]);


  return (
    <section className="container">
      <OS_Header propsType="Order List" />
      <div className="row">
        <div className="col-md-2">
          <OrderSidebar />
        </div>
        <div style={{ backgroundColor: "#F4F7FC" }} className="col-md-10 p-2">
          <div style={{ borderRadius: "10px" }}>
            <div className="row d-flex ps-5 ">
              {orderList.map((order, index) => (
                <OrderDetails key={index} order={order} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
