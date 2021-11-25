import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import { OS_Header } from "../../Shared/OS_Header/OS_Header";
import { OrderSidebar } from "../OrderSidebar/OrderSidebar";

export const Order = () => {
  const [loggedInsUser, setLoggedInUser] = useContext(UserContext);

  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    console.log(info);
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("orderName", info.orderName);
    formData.append("projectDetails", info.projectDetails);
    formData.append("price", info.price);
    formData.append("selectedStatus", 'Pending');
    formData.append("secondStatus", 'Done');
    formData.append("thirdStatus", 'Ongoing');
    formData.append("statusColor", "red");

    fetch("http://localhost:3001/createOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Order placed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="container">
      <OS_Header propsType="Order" />
      <div className="row">
        <div className="col-md-2">
          <OrderSidebar />
        </div>
        <div style={{ backgroundColor: "#F4F7FC" }} className="col-md-10 p-4">
          <div style={{ borderRadius: "10px" }} className="p-2 bg-white">
            <form onSubmit={handleSubmit} className="me-5 pe-5 ">
              <div class="form-group mt-2">
                <input
                  // value={loggedInsUser.displayName}
                  onBlur={handleBlur}
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Your name / Company's name"
                />
              </div>

              <div class="form-group mt-2">
                <input
                  // value={loggedInsUser.email}
                  onBlur={handleBlur}
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Your email address"
                />
              </div>

              <div class="form-group mt-2">

                <select
                  placeholder="Order name"
                  className="form-control"
                  name="orderName"
                  onBlur={handleBlur}
                >
                  <option value="Select service">Select service</option>
                  <option value="Mobile & Mobile Develoment">Web & Mobile Develoment</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Web Develoment">Web Develoment</option>
                  <option value="Android Develoment">Android Develoment</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                </select>
              </div>

              <div class="form-group mt-2">
                <textarea
                  onBlur={handleBlur}
                  placeholder="Project details"
                  class="form-control"
                  name="projectDetails"
                  id="textarea"
                  cols="20"
                  type="text"
                  rows="5"
                ></textarea>
              </div>
              <div class="form-group mt-2">
                <input
                  onBlur={handleBlur}
                  type="number"
                  class="form-control"
                  name="price"
                  placeholder="Price"
                />
              </div>

              <div class="form-group mt-2">
                <label for="exampleInputPassword">
                  Upload a Project Sample
                </label>
                <input
                  onChange={handleFileChange}
                  type="file"
                  class="form-control"
                  id="file"
                />
              </div>
              <button
                style={{ width: "150px" }}
                type="submit"
                class="btn btn-success mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
