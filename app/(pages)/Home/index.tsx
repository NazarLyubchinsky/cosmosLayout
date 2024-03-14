import { Collaborations } from "./Collaborations"
import { Earth } from "./Earth"
import { Main } from "./Main"
import { RoadMap } from "./RoadMap"
import { Faq } from "./FAQ"



export const HomePage = ({
}) => {
	return (
		<>
			<Main isActiveid='home' />
			<Earth isActiveid='factions' />
			<RoadMap isActiveid='roadmap' />
			<Collaborations isActiveid='collaborations' />
			<Faq isActiveid='faq' />
		</>


	)
}
