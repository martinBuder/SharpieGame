class Level {
	enemies;
	backgrounds;
	coins; 
	floors;
	poisons; 

	constructor(backgrounds, enemies, floors, coins, poisons) {
		this.enemies = enemies;
		this.floors = floors;
		this.backgrounds = backgrounds;
		this.coins = coins;
		this.poisons = poisons;
	}

}