class OrangePufferFish extends PufferFish {

	ANIMATIONS = {
		ENEMY_SWIM: [5, 'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition'],
		ENEMY_DIE: [3, 'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.Dead '],
	}

	constructor(endBossHere) {
		super();
		this.color = '2';
		this.loadImgPath();
		this.fillANIMATIONS()
		this.getLoadImages()
		this.animateSwim();

	}


}