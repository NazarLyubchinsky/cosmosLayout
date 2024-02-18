
// export async function getAllCharacter(id: string):  Promise<FilmResponse> {
// 	return fetch(`https://swapi.tech/api/films/${id}`).then(res => res.json())
// }


export async function getPlanet(id: string): Promise<PlanetResponse> {
	return fetch(`https://swapi.tech/api/planets/${id}`).then(res => res.json())
}

