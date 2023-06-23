class Coins extends MovableObject {

	constructor() {
		super().loadImg('../img/4. Marcadores/1. Coins/1.png');
		this.y = 50 + Math.random() * 300;
		this.x = 300 + Math.random() * 1600;
		this.width = 30;
		this.height = 30;
	}
}