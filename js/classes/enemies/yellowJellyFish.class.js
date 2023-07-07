class YellowJellyFish extends JellyFish {

	ANIMATIONS = {
		ENEMY_SWIM: [4, 'img/2.Enemy/2 Jelly fish/Regular/Yellow '],
		ENEMY_DIE: [4, 'img/2.Enemy/2 Jelly fish/Dead/y'],
	}

	constructor() {
		super();
		this.color = 'Yellow';
		this.loadImgPath();
		this.fillAnimations();
		this.getLoadImages();
		this.animateSwim();
	}
}