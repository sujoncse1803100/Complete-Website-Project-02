import React, { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://damp-eyrie-90120.herokuapp.com/service")
      .then((response) => response.json())
      .then((result) => setServices(result));
  }, [services]);

  return (
    <div className="mt-5 mb-5 container">
      <h1 className="text-center mb-5">
        Provide Awesome <span style={{ color: "green" }}>Services</span>
      </h1>
      <div className="row d-flex justify-content-center ">
        {!services.length && (
          <div className="w-100 text-center">
            <Loader
              className="m-2"
              type="Oval"
              color="#00BFFF"
              height={50}
              width={50}
            />
          </div>
        )}
        {services.map((service, index) => (
          <ServiceDetails key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
