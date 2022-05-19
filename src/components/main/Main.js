import React, { Fragment } from 'react';
import { sections } from '../ressources/sections';
import Section from './Section';

const Main = () => {
	return (
		<Fragment>
			{sections?.map((sec) => {
      return (
				<Section
					imgSrc={sec.image}
					smallTitle={sec.smallTitle}
					grandTitle={sec.bigTitle}
					buttonText={sec.textInButton}
					key={sec.id}
				/>
			) })}
		</Fragment>
	);
};

export default Main;
