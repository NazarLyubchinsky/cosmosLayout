export async function getAllPlanets(): Promise<PlanetsResponse> {
	return fetch('https://swapi.tech/api/planets').then(res => res.json())
}