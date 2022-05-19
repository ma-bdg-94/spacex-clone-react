import React from 'react'
import DrawerContent from './DrawerContent'
import './Drawer.css'

const Drawer = ({ isOpen, toggle }) => {
  return (
		<div
			className={`drawer-container ${isOpen && 'drawer-container__open'}`}
			style={{
				display: `${isOpen ? 'none' : 'block'}`,
				transition: 'all 5sease-in-out',
			}}
			toggle={toggle}
		>
			<DrawerContent />
		</div>
	);
}

export default Drawer