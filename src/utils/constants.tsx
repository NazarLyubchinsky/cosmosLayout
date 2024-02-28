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
		href: '#home',
		active: true,
	},
	{
		id: 2,
		title: 'Factions',
		href: '#factions',
		active: false,
	},
	{
		id: 3,
		title: 'Roadmap',
		href: '#roadmap',
		active: false,
	},
	{
		id: 4,
		title: 'Collaborations',
		href: '#collaborations',
		active: false,
	},
	{
		id: 5,
		title: 'FAQ',
		href: '#faq',
		active: false,
	},
];
