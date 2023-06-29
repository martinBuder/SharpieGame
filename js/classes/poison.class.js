class Poison extends CollectItems {

	POISONS_MOVE = [];
	imgInCoin = 0;

	constructor() {
		super().loadImg('../img/4. Marcadores/Posión/Dark - Right.png');
		this.y = 300 + Math.random() * 50;
		this.x = 300 + Math.random() * this.endgegnerPoint;

		this.width = 100;
		this.height = 100;

		this.fillPOISONS_MOVE();
		this.loadImages(this.POISONS_MOVE);
		this.animate();
	}

	fillPOISONS_MOVE() {
  for (let i = 1; i < 8; i++) {
    this.POISONS_MOVE.push(`img/4. Marcadores/Posión/Animada/${i}.png`);
  }
	}

	animate() {
		setInterval(() => {
		let i = this.imgInCoin % this.POISONS_MOVE.length;
		let path = this.POISONS_MOVE[i];
		this.img = this.imageCache[path];
		this.imgInCoin++;
			}, 1000/5);
	}
}