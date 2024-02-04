
import './styles/reset.scss';
import './styles/global.scss';
import './styles/variables.scss';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header';


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const seo = {
		title: 'Dusktopia ☄️',
		description: 'cosmos layout ☄️'
	};



	return (
		<html lang="en">
			<title>{seo.title}</title>
			<meta name='description' content={seo.description} />
			<body
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

