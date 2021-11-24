import React, { useState } from "react";
import { OS_Header } from "../../Shared/OS_Header/OS_Header";
import { ServiceSidebar } from "../ServiceSidebar/ServiceSidebar";

export const MakeAdmin = () => {
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    console.log(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", info.email);

    fetch('http://localhost:3001/makeAdmin', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert('Admin added');
            }
        })
        .catch(error => {
            console.error(error)
        })
  };
  return (
    <section className="container">
      <OS_Header propsType="Make Admin" />
      <div className="row">
        <div className="col-md-2">
          <ServiceSidebar />
        </div>
        <div style={{ backgroundColor: "#F4F7FC" }} className="col-md-10 p-4">
          <div
            style={{ borderRadius: "10px", height: "20vh" }}
            className="p-2 bg-white"
          >
            <form onSubmit={handleSubmit} className="me-5 d-flex pe-5 w-100">
              <div class="form-group mt-2 w-100">
                <label>Email</label>
                <div className="d-flex ">
                  <input
                    onBlur={handleBlur}
                    type="email"
                    class="form-control w-70 me-2"
                    name="email"
                    placeholder="Email Address"
                  />
                  <input
                   style={{width: '150px'}}
                   type="submit"
                   className="form-control btn-success"
                   name="email"
                   placeholder="Add"
                   />
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
