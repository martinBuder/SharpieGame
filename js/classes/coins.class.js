class Coins extends CollectItems {

	width = 50;
	height = 50;

	ANIMATIONS = {
		COIN_MOVE: [4, 'img/4. Marcadores/1. Coins/'],
	}

	constructor() {
		super().loadImg('../img/4. Marcadores/1. Coins/1.png');
		this.y = 50 + Math.random() * 250;
		this.x = 300 + Math.random() * this.endgegnerPoint;
		this.animate();
	}

	animate() {
		setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.COIN_MOVE)
			}, 1000/5);
	}
}