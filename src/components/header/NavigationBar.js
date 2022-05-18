import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useState, useLayoutEffect } from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useScreenSize } from '../../custom-hooks/useScreenSize';
import Logo from '../ressources/Logo';
import './NavigationBar.css';

const NavigationBar = () => {
	const [showDrawerButton, setShowDrawerButton] = useState(true);
	const size = useScreenSize();

	/* useEffect(() => {
		if (size.width > 992) {
			setShowDrawerButton(false);
		}
	}); */

	return (
		<Fragment>
			<Navbar
				expand="lg"
				className="navigation-bar justify-content-between py-3"
			>
				<Container>
					<Navbar.Brand href="#home">
						<Logo />
					</Navbar.Brand>

					<Navbar.Toggle
						aria-controls="basic-navbar-nav"
						className="drawerToggler"
					>
						<i className=" fa fa-solid fa-bars"></i>
					</Navbar.Toggle>

					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto justify-content-center">
							<Nav.Link href="#home" className=" nav-link">
								falcon 9
							</Nav.Link>
							<Nav.Link href="#link" className=" nav-link">
								falcon heavy
							</Nav.Link>
							<Nav.Link href="#home" className=" nav-link">
								dragon
							</Nav.Link>
							<Nav.Link href="#link" className=" nav-link">
								starship
							</Nav.Link>
							<Nav.Link href="#home" className=" nav-link">
								human spaceflight
							</Nav.Link>
							<Nav.Link href="#link" className=" nav-link">
								rideshare
							</Nav.Link>
							<Nav.Link href="#home" className=" nav-link">
								starlink
							</Nav.Link>
							{/* <Nav.Link href="#link" className="navigation-bar">Link</Nav.Link>
							<Nav.Link href="#home" className="navigation-bar">Home</Nav.Link>
							<Nav.Link href="#link" className="navigation-bar">Link</Nav.Link> */}
						</Nav>
						{size.width > 992 && (
							<Fragment>
								<Dropdown.Toggle
									style={{ background: 'none', border: 'none' }}
									id="dropdown-basic-button"
								>
									<i className=" fa fa-solid fa-bars"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item href="#action/3.1">
										Mission
									</Dropdown.Item>
									<Dropdown.Item href="#action/3.2">
										Launches
									</Dropdown.Item>
									<Dropdown.Item href="#action/3.3">Career</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item href="#action/3.4">
										Updates
									</Dropdown.Item>
									<Dropdown.Item href="#action/3.4">Shop</Dropdown.Item>
								</Dropdown.Menu>
							</Fragment>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};

export default NavigationBar;
