import { Factionslinks } from "./constants";
import { stringToId } from "./stringToId";


export function getFactionModalForValidatedId(id: string) {

	const invalidId = stringToId(id);

	const filteredFactions = Factionslinks.filter((item) => item.id === invalidId);

	// if (filteredFactions === undefined) {
	// 	// Обробка undefined
	// 	console.log("Faction data not found for id:", id);
	// 	return;
	// }

	return filteredFactions[0]?.modalInfo;
}