
import '../src/styles/reset.scss';
import '../src/styles/global.scss';
import '../src/styles/variables.scss';

import { Header } from '@components/Header';
import Footer from '@components/Footer/Footer';

import AOSinit from '@/src/hooks/useAos';

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
				<AOSinit />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

