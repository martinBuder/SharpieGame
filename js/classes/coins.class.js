class Coins extends CollectItems {

	ANIMATIONS = {
		COIN_MOVE: [],
	}

	constructor() {
		super().loadImg('../img/4. Marcadores/1. Coins/1.png');
		this.y = 50 + Math.random() * 250;
		this.x = 300 + Math.random() * this.endgegnerPoint;
		this.width = 50;
		this.height = 50;
		this.fillANIMATION(this.ANIMATIONS.COIN_MOVE, 5, 'img/4. Marcadores/1. Coins/');
		this.getLoadImages()
		this.animate();
	}

	animate() {
		setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.COIN_MOVE)
			}, 1000/5);
	}
}