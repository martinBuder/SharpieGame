class Light extends MovableObject {

	constructor() {
		super().loadImg('../img/3. Background/Layers/1. Light/COMPLETO.png');
		this.y = 0;
		this.x = 0;
		this.width = 2000;
		this.height = 520;
		this.brightness = 1;
		this.changeBrightness();
	}

	changeBrightness() {
				setInterval(() => {
					this.brightness = 0.5 + Math.random() * -0.2
				}, 1000 / 8); 
			}
		}
