

// export async function getAllCharacters(): Promise<FilmsResponse> {
// 	return fetch('https://swapi.tech/api/films').then(res => res.json())
// }



export async function getAllPlanets(): Promise<PlanetsResponse> {
	return fetch('https://swapi.tech/api/planets').then(res => res.json())
}