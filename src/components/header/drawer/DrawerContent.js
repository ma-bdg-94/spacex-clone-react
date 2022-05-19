import React from 'react'
import './Drawer.css'

const DrawerContent = () => {
  return (
		<div>
			<ul style={{ listStyle: 'none' }}>
				<li className='drawer-item animated-underline'>Mission</li>
				<li className='drawer-item animated-underline'>Launches</li>
				<li className='drawer-item animated-underline'>Careers</li>
				<li className='drawer-item animated-underline'>Updates</li>
				<li className='drawer-item animated-underline'>Shop</li>
			</ul>
		</div>
	);
}

export default DrawerContent