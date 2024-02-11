import { HomePage } from './pages/Home';
import { ContextProvider } from '../src/context/ContextProvider';

export default function Home() {

	return (
		<>
			<ContextProvider>
				<HomePage />
			</ContextProvider>


		</>
	)
}

