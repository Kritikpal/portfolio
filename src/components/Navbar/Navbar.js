import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  const [menuNo, setHover] = useState(-1);

  const handleMouseEnter = (menuNo) => {
    setHover(menuNo);
  };

  const handleMouseLeave = () => {
    setHover(-1);
  };

  const menuItems = [
    { text: "Home", to: "/home" },
    { text: "About", to: "/about" },
    { text: "Contact", to: "/contact" },
  ];

  const getClass = (hoverNo) => {
    if (menuNo === -1 || hoverNo === menuNo) {
      return "default-nav-item";
    } else {
      return "blured-link";
    }
  };

  return (
    <Navbar bg="dark" className="navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand className="brand-text">Kritik</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                onMouseLeave={() => handleMouseLeave()}
                onMouseEnter={() => handleMouseEnter(index)}
                className={`${getClass(index)} nav-link`}
                to={item.to}
              >
                {item.text}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
