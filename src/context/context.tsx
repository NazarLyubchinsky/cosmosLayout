import { createContext } from "react";

export interface ContextProps {
	isModalOpen: boolean,
	openedId: number,
	activeLinkId: string | null,
	setActiveLinkId: (newLinkId: string) => void;
	setIsModalOpen: (newIsModalOpen: boolean) => void;
	setOpenedId: (newOpenedId: number) => void;


	centerIndex: number;
	setCenterIndex: (newCenterIndex: number) => void

}


export const Context = createContext<ContextProps>({
	activeLinkId: '',
	isModalOpen: false,
	openedId: 1,
	setActiveLinkId: () => { },
	setIsModalOpen: () => { },
	setOpenedId: () => { },


	centerIndex: 0,
	setCenterIndex: () => { }
});

