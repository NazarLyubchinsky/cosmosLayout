export const MENU = [
	{
		name: "Concerts",
		link: "tour",
	},
	{
		name: "Creativity",
		link: "tracks",
	},
	{
		name: "News",
		link: "news",
	},
	{
		name: "SHOP",
		link: "shop",
	},
];


export const getGradientForPlanet = (name: string) => {
	switch (name) {
		case 'Tatooine':
			return 'linear-gradient( to bottom, #00FF00 0%, #7CFC00 50%, #008000 100% )'
		case "Alderaan":
			return 'linear-gradient(to right, #348778, #48C9A7)'
		case 'Yavin IV':
			return 'linear-gradient(to right, #C0855F, #E6A97E)'
		case 'Hoth':
			return 'linear-gradient(to right, #F7F7F7, #D6D6D6)'
		case 'Dagobah':
			return 'linear-gradient(to right, #708090, #4B535F)'
		case 'Bespin':
			return 'linear-gradient(to right, #778899, #445566)'
		case 'Endor':
			return 'linear-gradient(135deg, #4F964A, #35652A)'
		case 'Naboo':
			return 'linear-gradient(to right, #4D8057, #78A77D)'
		case 'Coruscant':
			return 'linear-gradient(to bottom, #545454 0%, #777777 25%, #999999 50%, #bbbbbb 75%, #dddddd 100%)'
		case 'Kamino':
			return 'linear-gradient(to bottom, #ffffff 0%, #f0f0f0 25%, #e0e0e0 50%, #d0d0d0 75%, #c0c0c0 100%)'

		default:
			return 'linear-gradient(to bottom, #708090 0%,  #708090 50%, #708090 100%)'
	}
}

export const linksNavigations = [
	{
		id: 1,
		title: 'Home',
		href: 'home',
		active: false,
	},
	{
		id: 2,
		title: 'Factions',
		href: 'factions',
		active: false,
	},
	{
		id: 3,
		title: 'Roadmap',
		href: 'roadmap',
		active: false,
	},
	{
		id: 4,
		title: 'Collaborations',
		href: 'collaborations',
		active: false,
	},
	{
		id: 5,
		title: 'FAQ',
		href: 'faq',
		active: false,
	},
];


export const Factionslinks: ArtMenuLinks[] = [
	{
		id: 1,
		href: '/',
		title: 'Blighted Badlands',
		image: '/imagesArtMenu/badlands/preview.jpg',
		active: false,
		modalInfo: {
			title: 'Badlands',
			content: (
				<>
					<p>Modern-day Dusktopia begins here</p>
					<p>The first thing that counts here is survival Only then can you think of profit; then finally domination</p>
					<p>Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly corrupt police force - and crush all standing in your way</p>
				</>
			),
			titleUrl: '/imagesArtMenu/badlands/title.png',
			coverImage: '/imagesArtMenu/badlands/modal_cover.jpg',
			listImages: [
				{
					src: '/imagesArtMenu/badlands/list/badlands_01.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/badlands/list/badlands_02.png',
					type: 'color',
				}, {
					src: '/imagesArtMenu/badlands/list/badlands_03.png',
					type: 'color',
				}, {
					src: '/imagesArtMenu/badlands/list/badlands_04.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/badlands/list/badlands_01.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/badlands/list/badlands_02.png',
					type: 'dark',
				}, {
					src: '/imagesArtMenu/badlands/list/badlands_03.png',
					type: 'dark',
				}, {
					src: '/imagesArtMenu/badlands/list/badlands_04.png',
					type: 'dark',
				}
			]
		}
	},
	{
		id: 2,
		href: '/',
		title: 'Glacial Frontier',
		image: '/imagesArtMenu/glacial_frontier/preview.jpg',

		active: false,
		modalInfo: {
			title: 'Glacial Frontier',
			titleUrl: '/imagesArtMenu/glacial_frontier/title.png',
			content: (
				<>
					<p>The home of everything warfare in Dusktopia</p>
					<p>Mercenaries and soldiers take payouts from the Cabal to do its bidding - but some want more for themselves, and are willing to go against power itself to get it</p>
					<p>Which side are you joining?</p>
				</>
			),
			coverImage: '/imagesArtMenu/glacial_frontier/modal_cover.jpg',
			listImages: [
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_01.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_02.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_03.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_04.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_01.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_02.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_03.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_04.png',
					type: 'dark',
				},
			]
		}
	},
	{
		id: 3,
		href: '/',
		title: 'Sundered Grove',
		image: '/imagesArtMenu/sundered_grove/preview.jpg',
		active: false,
		modalInfo: {
			title: 'Sundered Grove',
			titleUrl: '/imagesArtMenu/sundered_grove/title.png',
			content: (
				<>
					<p>Dusktopia’s last remaining sanctuary of peace</p>
					<p>Researchers and scientists congregate here to live in religious pacifism, spending their time developing a renewable energy source for the world</p>
					<p>A small faction wants more - selling Aurium on the black market for their own personal gain</p>
					<p>Will you root out the traitors or join them?</p>
				</>
			),
			coverImage: '/imagesArtMenu/sundered_grove/modal_cover.jpg',
			listImages: [
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_01.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_02.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_01.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_02.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_01.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_02.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_01.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_02.png',
					type: 'dark',
				},
			]
		}
	},
	{
		id: 4,
		href: '/',
		title: 'Sky Citadel',
		image: '/imagesArtMenu/sky_citadel/preview.jpg',
		active: false,
		modalInfo: {
			title: 'Sky Citadel',
			titleUrl: '/imagesArtMenu/sky_citadel/title.png',
			content: (
				<>
					<p>These are where the apex predators in Dusktopia reside</p>
					<p>The political and economic masters of all society: living high above the suffering of ordinary denizens, and calmly plot elevated pursuits like space colonization in absolute peace</p>
					<p>If you’re lucky enough to be part of it, hold on tight - everybody wants what you have</p>
				</>
			),
			coverImage: '/imagesArtMenu/sky_citadel/modal_cover.jpg',
			listImages: [
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'dark',
				},
			]
		}
	}
];