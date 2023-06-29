class Coins extends CollectItems {

	COIN_MOVE = [];
	imgInCoin = 0;

	constructor() {
		super().loadImg('../img/4. Marcadores/1. Coins/1.png');
		this.y = 50 + Math.random() * 300;
		this.x = 300 + Math.random() * this.endgegnerPoint;
		this.width = 50;
		this.height = 50;

		this.fillCOIN_MOVE();
		this.loadImages(this.COIN_MOVE);
		this.animate();
	}

	fillCOIN_MOVE() {
  for (let i = 1; i < 4; i++) {
    this.COIN_MOVE.push(`../img/4. Marcadores/1. Coins/${i}.png`);
  }
	}

	animate() {
		setInterval(() => {
		let i = this.imgInCoin % this.COIN_MOVE.length;
		let path = this.COIN_MOVE[i];
		this.img = this.imageCache[path];
		this.imgInCoin++;
			}, 1000/5);
	}
}