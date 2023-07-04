class JellyFish extends Enemies {



	constructor() {
		super();
		this.animateMove();
	};

	animateMove() {
		this.speed = 1 + Math.random() * 1.5;
		setInterval(() => {
			if(!this.gotIt) {
			if (this.y < -100) {
				this.x = 600 + Math.random() * this.endgegnerPoint;
				this.y = 480;
				this.hit = false;
			}
			this.y = this.y -this.speed
		} else {
			this.x = -50;
}
		}, 1000 / 60); 
	}

	loadImgPath() {
		this.colorPath = `img/2.Enemy/2 Jelly fish/Regular/${this.color} 1.png`;
		super.loadImg(this.colorPath);
	}

	
}




		


