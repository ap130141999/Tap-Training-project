import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import image from "../image/byjus_logo-trans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <Navbar
      style={{ background: "#5a189a", boxShadow: "10px 10px 10px  #9E9E9E" }}
      light
      expand="md"
      className="p-3 mb-5"
    >
      <NavbarBrand>
        <img src={image} style={{width: "30px",height: "30px" }} alt={ <FontAwesomeIcon icon={faHome} color="#5a189a" />}></img>
      </NavbarBrand>
      <NavbarBrand href="/" style={{ color: "#ffff" }}>
        BYJUS PAY
      </NavbarBrand>
    </Navbar>
  );
}

export default Header;
