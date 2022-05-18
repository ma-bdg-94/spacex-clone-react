import { useState, useLayoutEffect } from 'react';

export const useScreenSize = () => {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [screenSize, setScreenSize] = useState({
		width: undefined,
		height: undefined,
	});

	useLayoutEffect(() => {
		const handleResize = () => {
			var newWidth = window.innerWidth;
			var newHeight = window.innerHeight;
			setScreenSize({
				width: newWidth,
				height: newHeight,
			});
		};

		// Add event listener
		window.addEventListener('resize', handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		console.log(screenSize);
		return window.removeEventListener('resize', handleResize);
	}, []);

	return screenSize;
};
