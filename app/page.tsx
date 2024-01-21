"use client"

import { HomePage } from './pages/Home';
import { Context } from './context';

// interface ActiveLinkContextValue {
// 	activeLinkId: string;
// 	setActiveLinkId: (value: string) => void;
// }


// export const ActiveLinkContext = createContext<ActiveLinkContextValue>({ activeLinkId: '', setActiveLinkId: () => { } });
export default function Home() {

	return (
		<Context>
			<HomePage />
		</Context>

	)
}

