import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useScreenSize } from '../../custom-hooks/useScreenSize';
import Logo from '../ressources/Logo';
import './NavigationBar.css'

const NavigationBar = () => {
  const [showDrawerButton, setShowDrawerButton] = useState(true)
  const { width, height } = useScreenSize()

  if (width < 700) {
    setShowDrawerButton(!showDrawerButton);
		console.log(width)
  }

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
					<Navbar.Toggle aria-controls="basic-navbar-nav" className='drawerToggler'>
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
					{ (showDrawerButton && width < 700) ?	(<button className='drawerToggler'>
							<i className=" fa fa-solid fa-bars"></i>
						</button>): null}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
}

export default NavigationBar