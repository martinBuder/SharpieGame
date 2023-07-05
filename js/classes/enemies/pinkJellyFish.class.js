class PinkJellyFish extends JellyFish {

	ANIMATIONS = {
		ENEMY_SWIM: [5, 'img/2.Enemy/2 Jelly fish/Regular/Pink '],
		ENEMY_DIE: [4, 'img/2.Enemy/2 Jelly fish/Dead/P'],
	}

	constructor() {
		super();
		this.color = 'Pink';
		this.loadImgPath();
		this.fillANIMATIONS()
		this.getLoadImages()
		this.animateSwim()
	}
}