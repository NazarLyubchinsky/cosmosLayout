import { createContext } from "react";

export interface ContextProps {
	activeLinkId: string,
	setActiveLinkId: (newLinkId: string) => void;
}


export const Context = createContext<ContextProps>({
	activeLinkId: '',
	setActiveLinkId: () => { },
});

