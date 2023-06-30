class GreenJellyFish extends JellyFish {
	
	ANIMATIONS = {
		ENEMY_SWIM: [4, 'img/2.Enemy/2 Jelly fish/Regular/Green '],
		ENEMY_DIE: [4, 'img/2.Enemy/2 Jelly fish/Dead/g'],
	}

	constructor() {
		super();
		this.color = 'Green';
		this.loadImgPath();
		this.fillANIMATIONS()
		this.getLoadImages()
		this.animateSwim()
	}
}