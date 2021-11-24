import React, { useState } from "react";
import { OS_Header } from "../../Shared/OS_Header/OS_Header";
import { OrderSidebar } from "../OrderSidebar/OrderSidebar";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import { OrderDetails } from "./OrderDetails";

const orderList = [
  {
    icon: service1,
    title: "Web & Mobile Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?",
  },
  {
    icon: service2,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?",
  }

];

export const OrderList = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("phone", info.phone);

    // fetch('https://stark-shore-06055.herokuapp.com/addDoctors', {
    //     method: 'POST',
    //     body: formData
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data) {
    //             alert('Doctor added successfully');
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
  };
  return (
    <section className="container">
      <OS_Header propsType="Order List" />
      <div className="row">
        <div className="col-md-2">
          <OrderSidebar />
        </div>
        <div style={{ backgroundColor: "#F4F7FC" }}  className="col-md-10 p-2">
          <div
            style={{ borderRadius: "10px"}}
            
          >
            <div className="row d-flex justify-content-center ">
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
