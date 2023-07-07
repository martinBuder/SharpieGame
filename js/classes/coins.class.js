class Coins extends CollectItems {

	width = 40;
	height = 40;

	ANIMATIONS = {
		COIN_MOVE: [4, 'img/4. Marcadores/1. Coins/'],
	}

	constructor() {
		super().loadImg('img/4. Marcadores/1. Coins/1.png');
		this.y = 50 + Math.random() * 250;
		this.x = 300 + Math.random() * this.endgegnerPoint;
		this.fillAnimations();
		this.getLoadImages();
		this.animate();
	}

	/**
		* play coins Animation
		*/
	animate() {
		setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.COIN_MOVE)
			}, 1000/5);
	}
}