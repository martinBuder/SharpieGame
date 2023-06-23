class PufferFish extends MovableObject {

	constructor() {
		super().loadImg('../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
		this.y = 50 + Math.random() * 350;
		this.x = 300 + Math.random() * 500;
		this.width = 120;
		this.height = 70;
	}
}