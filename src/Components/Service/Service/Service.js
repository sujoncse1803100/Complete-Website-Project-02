import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { OS_Header } from "../../Shared/OS_Header/OS_Header";
import { ServiceSidebar } from "../ServiceSidebar/ServiceSidebar";
import "../../../App.css";

export const Service = () => {
  const [services, setServices] = useState([]);
  const [id, setId] = useState("abcdesfghsdjf7e");
  const [updatedData, setUpdatedData] = useState({
    selectedStatus: "",
    secondStatus: "",
    thirdStatus: "",
    dropdownColor: "",
  });

  useEffect(() => {
    fetch("https://damp-eyrie-90120.herokuapp.com/orders")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((err) => {});
  }, [services]);

  const handleBlur = (e, id) => {
    if (e.target.value === "Pending") {
      const newData = {
        selectedStatus: e.target.value,
        secondStatus: "Done",
        thirdStatus: "Ongonig",
        dropdownColor: "red",
      };
      setUpdatedData(newData);
      setId(id);
    } else if (e.target.value === "Done") {
      const newData = {
        selectedStatus: e.target.value,
        secondStatus: "Ongoing",
        thirdStatus: "Pending",
        dropdownColor: "green",
      };
      setUpdatedData(newData);
      setId(id);
    } else if (e.target.value === "Ongoing") {
      const newData = {
        selectedStatus: e.target.value,
        secondStatus: "Pending",
        thirdStatus: "Done",
        dropdownColor: "orange",
      };
      setUpdatedData(newData);
      setId(id);
    }
    console.log(id);
  };

  useEffect(() => {
    const bodydata = {
      selectedStatus: updatedData.selectedStatus,
      secondStatus: updatedData.secondStatus,
      thirdStatus: updatedData.thirdStatus,
      dropdownColor: updatedData.dropdownColor,
    };
    console.log(updatedData.selectedStatus);

    try {
      fetch(`https://damp-eyrie-90120.herokuapp.com/updateStatus/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodydata),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("status updated");
          if (result) {
            alert("status updated");
          }
        })
        .catch((err) => {
          // alert(err);
        });
    } catch (err) {
      alert(err);
    }
  }, [id]);

  return (
    <section className="container">
      <OS_Header propsType="Service List" />
      <div className="row">
        <div className="col-md-2">
          <ServiceSidebar />
        </div>
        <div style={{ backgroundColor: "#F4F7FC" }} className="col-md-10 p-4">
          <div style={{ borderRadius: "10px" }} className="p-2 bg-white">
            <table className="table table-borderless">
              <thead style={{ borderRadius: "20px" }} className="bg-light ">
                <tr>
                  <th className="text-secondary  p-2" scope="col">
                    Name
                  </th>
                  <th className="text-secondary  p-2" scope="col">
                    Email Id
                  </th>
                  <th className="text-secondary  p-2" scope="col">
                    Service
                  </th>
                  <th className="text-secondary  p-2" scope="col">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {services.map((service, index) => (
                  <tr>
                    <td>{service.name}</td>
                    <td>{service.email}</td>
                    <td>{service.orderName}</td>
                    <td>
                      <select
                        placeholder="status"
                        className="form-control"
                        name="status"
                        onBlur={(e) => handleBlur(e, service._id)}
                        style={{
                          border: "none",
                          color: `${service.statusColor}`,
                        }}
                      >
                        <option value={service.status.selectedStatus}>
                          {service.status.selectedStatus}
                        </option>
                        <option value={service.status.secondStatus}>
                          {service.status.secondStatus}
                        </option>
                        <option value={service.status.thirdStatus}>
                          {service.status.thirdStatus}
                        </option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!services.length && (
                <div className="d-flex justify-content-center">
                  <Loader
                    className="m-2 "
                    type="Oval"
                    color="#00BFFF"
                    height={50}
                    width={50}
                  />
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};
