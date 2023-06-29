class Floor extends MovableObject {

	constructor() {
		super().loadImg('../img/3. Background/Layers/2. Floor/D.png');
		this.y = -600 + Math.random() * -100;
		this.x = Math.random() * this.endgegnerPoint;
		this.width = 3000;
		this.height = 1500;
	}
}