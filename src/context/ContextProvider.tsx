import React, { useMemo, useState } from "react"

import { Context } from './context'

interface StoreProviderProps {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<StoreProviderProps> = ({ children }) => {
	const [activeLinkId, setActiveLinkId] = useState<string>('home');

	const value = useMemo(
		() => ({
			activeLinkId, setActiveLinkId,
		}),
		[activeLinkId, setActiveLinkId]
	);

	return <Context.Provider value={value}>{children}</Context.Provider>;
};