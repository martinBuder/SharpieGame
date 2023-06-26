class JellyFish extends Enemies {

	constructor() {
		super().loadImg('../img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
		this.animateMove();
	};

	animateMove() {
		this.speed = 1 + Math.random() * 1.5;
		setInterval(() => {
			if (this.y < -100) {
				this.x = 300 + Math.random() * 1600;
				this.y = 480;
			}
			this.y = this.y -this.speed
		}, 1000 / 60); 
	}
}


		


