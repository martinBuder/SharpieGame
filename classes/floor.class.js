class Floor extends MovableObject {

	constructor() {
		super().loadImg('../img/3. Background/Layers/2. Floor/D.png');
		this.y = -150 + Math.random() * -100;
		this.x = Math.random() * 500;
		this.width = 2000;
		this.height = 900;
	}
}