import React from 'react';
import './sections.css'

const Section = ({ imgSrc, smallTitle, grandTitle, buttonText, ...props }) => {
	return (
		<div style={{ position: 'relative' }}>
			<img src={imgSrc} style={{ width: '100%' }} alt="" />
			<div
				style={{
					background: 'none',
					height: '100%',
					width: '100%',
					zIndex: 10,
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
          marginLeft: '-30%',
          marginTop: '0%'
				}}
			>
				<div className='script-container'>
					<h5>{smallTitle}</h5>
					<h1 style={{ marginTop: '-5%' }}>{grandTitle}</h1>
					<button className='section-btn'>{buttonText}</button>
				</div>
			</div>
		</div>
	);
};

export default Section;
