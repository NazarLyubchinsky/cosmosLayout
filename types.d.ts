interface CharacterProps {
	id: number,
	name: string,
	status: string,
	species: string,
	type: string,
	gender: string,
}
interface getAllCharactersProps {
	// id: number,
	// name: string,
	// status: string,
	results: Character[]

}


interface Link {
	id: number;
	href: string;
	title: string;
	image: string;
	active?: boolean;
}



//  

// interface Film {
// 	properties: FilmProperties
// 	description: string
// 	_id: string
// 	uid: string
// 	__v: number

// }

// interface FilmProperties {
// 	characters: string[]
// 	planets: string[]
// 	starships: string[]
// 	vehicles: string[]
// 	species: string[]
// 	created: string
// 	edited: string
// 	producer: string
// 	title: string
// 	episode_id: number
// 	director: string
// 	release_date: string
// 	opening_crawl: string
// 	url: string
// }

// interface FilmsResponse {
// 	message: string,
// 	result: Film[]
// }

// interface FilmResponse {
// 	message: string,
// 	result: {
// 		properties: FilmProperties
// 	},
// }

// ///////////

interface Planet {
	name: string
	uid: string
	url: string

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
		properties: Film
	},
}