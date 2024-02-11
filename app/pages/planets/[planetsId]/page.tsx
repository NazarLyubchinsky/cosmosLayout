
import { getPlanet } from "@/src/actions/getPlanet"
import { getAllPlanets } from "@/src/actions/getAllPlanets"

interface Params {
	params: {
		shopId: string
	}
}

export default async function Planet({ params }: Params) {
	const { result } = await getPlanet(params.shopId)
	console.log(result)
	return (
		<div>
			<h1>{result.properties.name}</h1>
		</div>
	)
}

export async function generateStaticParams() {
	const planet = await getAllPlanets()

	return planet.results.map((film) => ({
		filmId: film.uid
	}))
}