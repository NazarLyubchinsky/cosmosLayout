import { createContext } from "react";

export interface ContextProps {
	activeLinkId: string,
	isModalOpen: boolean,
	openedId: number,
	setActiveLinkId: (newLinkId: string) => void;
	setIsModalOpen: (newIsModalOpen: boolean) => void;
	setOpenedId: (newOpenedId: number) => void;


	
}


export const Context = createContext<ContextProps>({
	activeLinkId: '',
	isModalOpen: false,
	openedId: 1,
	setActiveLinkId: () => { },
	setIsModalOpen: () => { },
	setOpenedId: () => { },

});

