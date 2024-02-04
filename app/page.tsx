"use client"

import { HomePage } from './pages/Home';
import { ContextProvider } from './context/ContextProvider';



export default function Home() {



	return (
		<>
			<ContextProvider>
				<HomePage />
			</ContextProvider>

		</>
	)
}

