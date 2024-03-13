
export async function getPlanet(id: string): Promise<PlanetResponse> {
	return fetch(`https://swapi.tech/api/planets/${id}`).then(res => res.json())
}

