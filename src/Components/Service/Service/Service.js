import React, { useEffect, useState } from "react";
import { OS_Header } from "../../Shared/OS_Header/OS_Header";
import { ServiceSidebar } from "../ServiceSidebar/ServiceSidebar";

export const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders')
    .then(response => response.json())
    .then(data => setServices(data));
  },[services])


  return (
    <section className="container">
      <OS_Header propsType="Service List" />
      <div className="row">
        <div className="col-md-2">
          <ServiceSidebar />
        </div>
        <div style={{ backgroundColor: "#F4F7FC" }} className="col-md-10 p-4">
          <div style={{ borderRadius: "10px" }} className="p-2 bg-white">
            <table
              // style={{ height: "75vh" }}
              className="table table-borderless"
            >
              <thead style={{ borderRadius: "20px" }} className="bg-light ">
                <tr>
                  <th className="text-secondary text-center p-2" scope="col">
                    Name
                  </th>
                  <th className="text-secondary text-center p-2" scope="col">
                    Email Id
                  </th>
                  <th className="text-secondary text-center p-2" scope="col">
                    Service
                  </th>
                  <th className="text-secondary text-center p-2" scope="col">
                    Project Details
                  </th>
                  <th className="text-secondary text-center p-2" scope="col">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {services.map((patient, index) => (
                  <tr>
                    <td>{patient.name}</td>
                    <td>{patient.email}</td>
                    <td>{patient.orderName}</td>
                    <td>{patient.projectDetails}</td>
                    <td>{patient.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
