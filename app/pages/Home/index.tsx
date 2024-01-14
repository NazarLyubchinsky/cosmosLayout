import { Earth } from "./Earth"
import { Main } from "./Main"
import { RoadMap } from "./RoadMap"


export const HomePage = ({

}) => {
	return (
		<>
			<Main isActiveid='home' />

			<Earth isActiveid='factions' />

			<RoadMap isActiveid='roadmap' />
		</>

	)
}