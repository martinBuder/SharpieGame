class GreenPufferFish extends PufferFish {

	ANIMATIONS = {
		ENEMY_SWIM: [5, 'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition'],
		ENEMY_DIE: [3, 'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead '],
	}

	constructor() {
		super();
		this.color = '1';
		this.loadImgPath();
		this.fillAnimations();
		this.getLoadImages();
		this.animateSwim();
	}

}