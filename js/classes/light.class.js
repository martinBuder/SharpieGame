class Light extends MovableObject {

	y = -1000;
	x = 0;
	width = 5000;
	height = 1920;

	constructor() {
		super().loadImg('img/3. Background/Layers/1. Light/COMPLETO.png');
		this.changeBrightness();
	}

/**
	* change brightness 
	*/
	changeBrightness() {
		setInterval(() => {
			this.brightness = 1 + Math.random() * -1
		}, 1000 / 10);
	}
}
