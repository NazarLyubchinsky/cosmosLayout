import React, { createContext, useState } from "react"
export const CustomContext = createContext({
	activeLinkId: '',
	setActiveLinkId: (id: string) => { },
});

export const Context = (props: any) => {
	const [activeLinkId, setActiveLinkId] = useState('home');

	const value = {
		activeLinkId,
		setActiveLinkId,
	};

	return (
		<CustomContext.Provider value={value}>
			{props.children}
		</CustomContext.Provider>
	);
};