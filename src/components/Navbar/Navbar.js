import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavbar() {
    const [menuNo, setHover] = useState(-1);
    const handelMouseEnter = (menuNo) => {
        setHover(menuNo);
    }
    const handleMouseLeave = () => {
        setHover(-1);
    };
    function getClass(hoverNo) {
        if (menuNo == -1) {
            return 'default-nav-item'
        } else {
            if (hoverNo == menuNo) {
                return 'default-nav-item'
            } else {
                return 'blured-link'
            }
        }
    }

    return (
        <Navbar bg="dark" className='navbar-dark' expand="lg">
            <Container>
                <Navbar.Brand className="brand-text">Kritik</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Link
                            onMouseLeave={() => { handleMouseLeave() }}
                            onMouseEnter={() => { handelMouseEnter(0) }}
                            className={getClass(0) + " " + "nav-link"} to='/home'>Home
                        </Link>
                        <Link
                            onMouseLeave={() => { handleMouseLeave() }}
                            onMouseEnter={() => { handelMouseEnter(1) }}
                            className={getClass(1) + " " + "nav-link"} to='/about'>About
                        </Link>
                        <Link
                            onMouseLeave={() => { handleMouseLeave() }}
                            onMouseEnter={() => { handelMouseEnter(2) }}
                            className={getClass(2) + " " + "nav-link"} to='/home'>Home
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default MyNavbar;
