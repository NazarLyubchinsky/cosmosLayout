"use client"

import React, { useEffect, useMemo, useState } from "react"

import { Context } from './context'


interface StoreProviderProps {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<StoreProviderProps> = ({ children }) => {
	const [activeLinkId, setActiveLinkId] = useState<string | null>('home' || null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [openedId, setOpenedId] = useState(1);
	const [centerIndex, setCenterIndex] = useState<number>(0);



	useEffect(() => {
		if (typeof window !== 'undefined' && window.localStorage) {
			const activeLinkId = localStorage.getItem('activeLinkId');
			const centerIndex = Number(localStorage.getItem('activeId'));

			setActiveLinkId(activeLinkId);
			setCenterIndex(centerIndex);
		}
	}, []);


	const value =
		useMemo(
			() =>
			({
				activeLinkId, setActiveLinkId, isModalOpen, setIsModalOpen, openedId, setOpenedId, centerIndex, setCenterIndex

			})
			,
			[activeLinkId, setActiveLinkId, isModalOpen, setIsModalOpen, openedId, setOpenedId, centerIndex, setCenterIndex

			]
		);

	return <Context.Provider value={value}>{children}</Context.Provider>;
};