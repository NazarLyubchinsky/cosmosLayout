import { ContextProvider } from '../src/context/ContextProvider';
import { HomePage } from './(pages)/Home';
import Loading from './loading';



export default function Home() {
	return (
		<>
				<ContextProvider>
					<HomePage />
				</ContextProvider>
		</>
	)
}

