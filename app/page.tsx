"use client"

import { Main } from './pages/Main';
import { RoadMap } from './pages/RoadMap';
import { createContext, useEffect, useState } from 'react';
import { Earth } from './pages/Earth';

interface ActiveLinkContextValue {
	activeLinkId: string;
	setActiveLinkId: (value: string) => void;
}


export const ActiveLinkContext = createContext<ActiveLinkContextValue>({ activeLinkId: '', setActiveLinkId: () => { } });
export default function Home() {
	const [activeLinkId, setActiveLinkId] = useState('home');

	useEffect(() => {
		const id = localStorage.getItem('activeLinkId');
		if (id) {
			setActiveLinkId(id);
		}
	}, []);

	return (
		<div>
			<ActiveLinkContext.Provider value={{ activeLinkId, setActiveLinkId }}>
				<Main isActiveid='home' />

				<Earth isActiveid='factions' />

				<RoadMap isActiveid='roadmap' />
			</ActiveLinkContext.Provider>

		</div>
	)
}