class Poison extends CollectItems {

	width = 70;
	height = 70;
	imgInCoin = 0;

	ANIMATIONS = {
		POISONS_MOVE: [8, 'img/4. Marcadores/Posión/Animada/'],
	}

	constructor() {
		super().loadImg('img/4. Marcadores/Posión/Dark - Right.png');
		this.gotIt = false
		this.y = 300 + Math.random() * 50;
		this.x = 300 + Math.random() * this.endgegnerPoint;
		this.fillANIMATIONS()
		this.getLoadImages()
		this.animate();
	}

	/**
		* play poison animation
		*/
	animate() {
		setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.POISONS_MOVE)
			}, 1000/5);
	}
}