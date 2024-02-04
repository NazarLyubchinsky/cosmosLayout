
import '../src/styles/reset.scss';
import '../src/styles/global.scss';
import '../src/styles/variables.scss';
import { Header } from '@/src/components/Header';
import Footer from '@/src/components/Footer/Footer';


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

