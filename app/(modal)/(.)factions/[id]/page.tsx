'use client'
import { getFactionModalForValidatedId } from '@/src/utils/processId';
import { Modal } from './modal';


export default function FactionsModal({
	params: { id },
}: {
	params: { id: string };
}) {

	const factionData  = getFactionModalForValidatedId(id)

	return <Modal
		id={id}
		backgroundUrl={factionData?.coverImage }
	></Modal >;
}

