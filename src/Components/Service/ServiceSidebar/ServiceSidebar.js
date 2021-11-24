import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPlus,faUser,faTaxi} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import '../Service.css';

export const ServiceSidebar = () => {

  return (
    <div>
      <div
        style={{ height: "100vh" }}
        className="pt-4 ps-2 sidebar d-flex flex-column justify-content-between"
      >
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link
              style={{ textDecoration: "none" }}
              className="text-dark linkText"
              to="/service"
            >
              <FontAwesomeIcon className="me-3" icon={faTaxi} />
              Service List
            </Link>
          </li>

          <li className="mb-3">
            <Link
              style={{ textDecoration: "none" }}
              className="text-dark linkText"
              to="/addService"
            >
              <FontAwesomeIcon className="me-3" icon={faPlus} />
              Add Service
            </Link>
          </li>

          <li className="mb-3">
            <Link
              style={{ textDecoration: "none" }}
              className="text-dark linkText"
              to="/makeAdmin"
            >
              <FontAwesomeIcon style={{width:'20px',marginRight:'5px'}}  icon={faUser} /> Make Admin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
