import ModalEarth from "@/src/components/Modal/Modal";
import styles from './style.module.scss'
import { getFactionModalForValidatedId } from "@/src/utils/processId";
import { NotFounded } from "@/src/components/NotFound/not-found";

export default function FactionsPage({
	params: { id },
}: {
	params: { id: string };
}) {
	const filteredFactions = getFactionModalForValidatedId(id)
	return <div className={styles.modalContainer} style={{ background: `url(${filteredFactions?.coverImage})` }}>
		{!filteredFactions && <NotFounded />}
		<ModalEarth id={id} visibleHeader={false} />
	</div>
}
