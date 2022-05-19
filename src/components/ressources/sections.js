import { v4 as uuidv4 } from 'uuid';

export const sections = [
	{
		id: `01-${uuidv4()}`,
		smallTitle: 'Upcoming Launch',
		bigTitle: 'Starlink Mission',
		image: '52034684153',
		textInButton: 'Rewatch',
	},
	{
		id: `02-${uuidv4()}`,
		smallTitle: 'COMPLETED MISSION',
		bigTitle: 'CREW-3 RETURNS TO EARTH',
		image: '51991997825',
		textInButton: 'Rewatch',
	},
	{
		id: `03-${uuidv4()}`,
		smallTitle: '',
		bigTitle: 'STARSHIP UPDATE',
		image: '52035160845',
		textInButton: 'Learn More',
	},
	{
		id: `04-${uuidv4()}`,
		smallTitle: 'Upcoming Launch',
		bigTitle: 'STARSHIP UPDATE',
		image: '52013130121',
		textInButton: 'Learn More',
	},
];
