import React, { useContext } from "react";
import "../Navbar/Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import { UserContext } from "../../../App";

export const OS_Header = ({ propsType }) => {
  const [loggedInsUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="">
      <Navbar bg=" text-white" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="me-auto d-flex">
            <img
              style={{ height: "40px", marginRight: "100px" }}
              src={logo}
              alt=""
            />
            <h5>{propsType} </h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navLink me-3" href="">
                <Link
                  className=" text-dark"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="navLink me-3" href="">
                <Link
                  className=" text-dark"
                  style={{ textDecoration: "none" }}
                  to="/login"
                >
                  <img
                    style={{
                      height: "30px",
                      width: "30px",
                      marginRight: "10px",
                      borderRadius: "10px",
                    }}
                    className=""
                    src={loggedInsUser.photoURL}
                    alt=""
                  />
                  {/* {loggedInsUser.displayName} */}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
