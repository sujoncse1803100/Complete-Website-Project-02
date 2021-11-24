import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faShoppingCart,faComment,faTaxi} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import '../Order.css';

export const OrderSidebar = () => {

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
              to="/order"
            >
              <FontAwesomeIcon className="me-3" icon={faShoppingCart} />
              Order
            </Link>
          </li>

          <li className="mb-3">
            <Link
              style={{ textDecoration: "none" }}
              className="text-dark linkText"
              to="/orderList"
            >
              <FontAwesomeIcon className="me-3" icon={faTaxi} />
              Order List
            </Link>
          </li>

          <li className="mb-3">
            <Link
              style={{ textDecoration: "none" }}
              className="text-dark linkText"
              to="/review"
            >
              <FontAwesomeIcon style={{width:'20px',marginRight:'5px'}}  icon={faComment} /> Review
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
