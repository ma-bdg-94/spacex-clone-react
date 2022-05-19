import React, { Fragment, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useToggle } from '../../custom-hooks/useToggle';
import useWindowSize from '../../custom-hooks/useWindowSize';
import Logo from '../ressources/Logo';
import Drawer from './drawer/Drawer';
import DrawerButton from './drawer/DrawerButton';
import './NavigationBar.css';

const NavigationBar = () => {
	const { width } = useWindowSize();
	const [displayDrawer, setDisplayDrawer] = useToggle(true);

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
						<Nav className="mx-5">
							
								<Nav.Link href="#home" className="animated-underline nav-link">
									falcon 9
								</Nav.Link>
								<Nav.Link href="#link" className="animated-underline nav-link">
									falcon heavy
								</Nav.Link>
								<Nav.Link href="#home" className="animated-underline nav-link">
									dragon
								</Nav.Link>
								<Nav.Link href="#link" className="animated-underline nav-link">
									starship
								</Nav.Link>
								<Nav.Link href="#home" className="animated-underline nav-link">
									human spaceflight
								</Nav.Link>
								<Nav.Link href="#link" className="animated-underline nav-link">
									rideshare
								</Nav.Link>
								<Nav.Link href="#home" className="animated-underline nav-link">
									starlink
								</Nav.Link>
								{width <= 992 && (
									<Fragment>
										<Nav.Link href="#home" className=" nav-link">
											Mission
										</Nav.Link>
										<Nav.Link href="#link" className=" nav-link">
											Launches
										</Nav.Link>
										<Nav.Link href="#home" className=" nav-link">
											Careers
										</Nav.Link>
										<Nav.Link href="#link" className=" nav-link">
											Updates
										</Nav.Link>
										<Nav.Link href="#home" className=" nav-link">
											Shop
										</Nav.Link>
									</Fragment>
								)}
							
						</Nav>
						<DrawerButton
						style={{
							display: `${width <= 992 ? 'none' : 'inline'}`,
							cursor: 'pointer',
							color: 'white',
							background: 'none',
							border: 'none',
						}}
						onClick={setDisplayDrawer}
						isClicked={displayDrawer}
					/>
					</Navbar.Collapse>
					
				</Container>
			</Navbar>

			{/* Drawer */}
			<Drawer isOpen={displayDrawer} toggle={setDisplayDrawer} />
		</Fragment>
	);
};

export default NavigationBar;
