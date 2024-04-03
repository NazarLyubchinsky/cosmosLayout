"use client"

import React, { ReactNode, useEffect, useMemo, useState } from "react"

import { Context, ModalInfo } from './context'


interface StoreProviderProps {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<StoreProviderProps> = ({ children }) => {
	const [activeLinkId, setActiveLinkId] = useState<string | null>('home' || null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [centerIndex, setCenterIndex] = useState<number>(0);



	const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);


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
				activeLinkId, setActiveLinkId, isModalOpen, setIsModalOpen, centerIndex, setCenterIndex, modalInfo, setModalInfo

			})
			,
			[activeLinkId, setActiveLinkId, isModalOpen, setIsModalOpen, centerIndex, setCenterIndex, modalInfo, setModalInfo

			]
		);

	return <Context.Provider value={value}>{children}</Context.Provider>;
};