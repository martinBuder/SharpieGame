class JellyFish extends Enemies {

	constructor() {
		super().loadImg('../img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');

		setInterval(() => {
			if (this.y < -100) {
				this.x = 300 + Math.random() * 1600;
				this.y = 480;
			}
			this.y = this.y -1
		}, 10 + Math.random() * 2); 
	}

}

