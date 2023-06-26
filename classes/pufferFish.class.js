class PufferFish extends Enemies {

	constructor() {
		super().loadImg('../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
		this.animateMove();
		
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

