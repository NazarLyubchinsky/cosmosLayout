interface CharacterProps {
	id: number,
	name: string,
	status: string,
	species: string,
	type: string,
	gender: string,
}
interface getAllCharactersProps {
	results: Character[]
}


interface Link {
	id: number;
	href: string;
	title: string;
	image: string;
	active?: boolean;
}



interface Planet {
	name: string
	uid: string
	url: string,
	diameter: string,
	rotation_period: string,
	orbital_period: string,
	gravity: string,
	population: string,
	climate: string,
	terrain: string,
	surface_water: string,
	created: string,
	edited: string


}

interface PlanetProperties {
	message: string
	total_records: number
	total_pages: number
	previous: any
	next: string
	results: Planet[]
}

interface PlanetsResponse {
	message: string,
	results: Planet[]
}

interface PlanetResponse {
	message: string,
	result: {
		properties: Planet
	},
}


interface ModalInfo {
	title: string;
	titleUrl: string;
	content: ReactNode;
	coverImage: string;
	listImages: {
		src: string;
		type: 'color' | 'dark';
	}[]
}
interface ArtMenuLinks {
	id: number;
	href: string;
	title: string;
	image: string;
	active: boolean;
	modalInfo: ModalInfo;
}