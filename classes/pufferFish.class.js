class PufferFish extends Enemies {

	constructor() {
		super().animateMove();
	};

	animateMove() {
	this.speed = 2 + Math.random() * 2;
		setInterval(() => {
			if (this.x < -100) {
				this.x = 2000;
				this.y = 50 + Math.random() * 300;
			}
			this.x = this.x - this.speed 
		}, 1000 / 60); 
	}
}

