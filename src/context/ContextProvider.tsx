"use client"

import React, { useMemo, useState } from "react"

import { Context } from './context'


interface StoreProviderProps {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<StoreProviderProps> = ({ children }) => {
	const [activeLinkId, setActiveLinkId] = useState<string>('home');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [openedId, setOpenedId] = useState(1);



	const value = useMemo(
		() => ({
			activeLinkId, setActiveLinkId, isModalOpen, setIsModalOpen, openedId, setOpenedId
		}),
		[activeLinkId, setActiveLinkId, isModalOpen, setIsModalOpen, openedId, setOpenedId]
	);

	return <Context.Provider value={value}>{children}</Context.Provider>;
};