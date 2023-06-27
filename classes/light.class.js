class Light extends MovableObject {

	constructor() {
		super().loadImg('../img/3. Background/Layers/1. Light/COMPLETO.png');
		this.y = -1000;
		this.x = 0;
		this.width = 10000;
		this.height = 1920;
		this.changeBrightness();
	}

	changeBrightness() {
				setInterval(() => {
					this.brightness = 1 + Math.random() * -1
				}, 1000/10); 
			}
		}
