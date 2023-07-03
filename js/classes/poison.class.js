class Poison extends CollectItems {

	width = 70;
	height = 70;

	ANIMATIONS = {
		POISONS_MOVE: [8, 'img/4. Marcadores/Posión/Animada/'],
	}

	imgInCoin = 0;

	constructor() {
		super().loadImg('../img/4. Marcadores/Posión/Dark - Right.png');
		this.y = 300 + Math.random() * 50;
		this.x = 300 + Math.random() * this.endgegnerPoint;
		this.fillANIMATIONS()
		this.getLoadImages()
		this.animate();
	}


	animate() {
		setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.POISONS_MOVE)
			}, 1000/5);
	}
}