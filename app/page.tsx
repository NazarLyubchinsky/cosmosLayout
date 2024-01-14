"use client"

import { createContext, useEffect, useState } from 'react';
import { HomePage } from './pages/Home';

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
				<HomePage />
			</ActiveLinkContext.Provider>

		</div>
	)
}