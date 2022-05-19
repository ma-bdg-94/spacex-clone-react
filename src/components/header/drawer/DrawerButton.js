import React from 'react';

const DrawerButton = ({ onClick, style, className, isClicked, ...props }) => {
	return (
		<button onClick={onClick} style={style} className={className}>
			{' '}
			{!isClicked ? (
				<i className="fa fa-solid fa-power-off"></i>
			) : (
				<i className=" fa fa-solid fa-bars"></i>
			)}
		</button>
	);
};

export default DrawerButton;
