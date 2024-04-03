import { ReactNode, createContext } from "react";
export interface ModalInfo {
	title: string;
	titleUrl: string;
	content: ReactNode;
	coverImage: string;
	listImages: {
		src: string;
		type: 'color' | 'dark';
	}[]
}


export interface ContextProps {
	isModalOpen: boolean,
	activeLinkId: string | null,
	setActiveLinkId: (newLinkId: string) => void;
	setIsModalOpen: (newIsModalOpen: boolean) => void;


	centerIndex: number;
	setCenterIndex: (newCenterIndex: number) => void

	modalInfo: ModalInfo | null,
	setModalInfo: (newModalInfo: ModalInfo | null) => void

}


export const Context = createContext<ContextProps>({
	activeLinkId: '',
	isModalOpen: false,
	setActiveLinkId: () => { },
	setIsModalOpen: () => { },


	centerIndex: 0,
	setCenterIndex: () => { },

	modalInfo: null,
	setModalInfo: () => { }
});

