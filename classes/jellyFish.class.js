class JellyFish extends MovableObject {

	constructor() {
		super().loadImg('../img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
		this.y = 50 + Math.random() * 300;
		this.x = 300 + Math.random() * 500;
		this.width = 70;
		this.height = 100;
	}
}