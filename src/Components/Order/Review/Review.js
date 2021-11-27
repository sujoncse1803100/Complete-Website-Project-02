import React, { useContext, useState } from "react";
import { OS_Header } from "../../Shared/OS_Header/OS_Header";
import { OrderSidebar, ServiceSidebar } from "../OrderSidebar/OrderSidebar";
import "../Order.css";
import { UserContext } from "../../../App";

export const Review = () => {
  const [loggedInUsr,setLoggedInUser] = useContext(UserContext);
  const [info, setInfo] = useState({
    name : loggedInUsr.displayName,
    photoURL: loggedInUsr.photoURL
  });

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://damp-eyrie-90120.herokuapp.com/addReview', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(info),
    })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert('Thanks for review');
            }
        })
        .catch(error => {
            console.error(error)
        })
  };

  return (
    <section className="container">
      <OS_Header propsType="Review" />
      <div className="row">
        <div className="col-md-2">
          <OrderSidebar />
        </div>
        <div style={{ backgroundColor: "#F4F7FC" }} className="col-md-10   p-4">
          <div
            style={{ borderRadius: "10px", height: "" }}
            className="p-2 bg-white"
          >
            <form onSubmit={handleSubmit} className="me-5 pe-5 w-100">
              <div class="form-group mt-2">
                <label>Service Title</label>
                <select
                  placeholder="Order name"
                  className="form-control"
                  name="orderName"
                  onBlur={handleBlur}
                >
                  <option value="Select service" disabled selected>Select your service</option>
                  <option value="Mobile & Mobile Develoment">Web & Mobile Develoment</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Web Develoment">Web Develoment</option>
                  <option value="Android Develoment">Android Develoment</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                </select>
              </div>

              <div class="form-group mt-2">
                <label>Description</label>
                <textarea
                  onBlur={handleBlur}
                  placeholder="What's your mind ?"
                  class="form-control"
                  name="description"
                  id="description"
                  type="text"
                  cols="20"
                  rows="5"
                ></textarea>
              </div>

              <input
                style={{ width: "150px" }}
                type="submit"
                value="Submit"
                class="btn btn-success mt-5"
              />
                
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
