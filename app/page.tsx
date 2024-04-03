
import { ContextProvider } from '../src/context/ContextProvider';
import { HomePage } from './(pages)/Home';

export default function Home() {
	return (
		<>
			<ContextProvider>
				<HomePage />
			</ContextProvider>
		</>
	)
}

