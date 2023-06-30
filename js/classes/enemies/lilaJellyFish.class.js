class LilaJellyFish extends JellyFish {

	ANIMATIONS = {
		ENEMY_SWIM: [4, 'img/2.Enemy/2 Jelly fish/Regular/Lila '],
		ENEMY_DIE: [4, 'img/2.Enemy/2 Jelly fish/Dead/L'],
	}

	constructor() {
		super();
		this.color = 'Lila';
		this.loadImgPath();
		this.fillANIMATIONS()
		this.getLoadImages()
		this.animateSwim();
	}


}