class JellyFish extends Enemies {


	y = 460

direction = 1

	constructor() {
		super();
		this.animateMove();
		this.x = 400 + Math.random() * 4000;
	};

	/**
		* play jellyfish goes from down to up animation
		*/
	animateMove() {
		this.speed = 1 + Math.random() * 1.5;
		setInterval(() => {
			if (!this.gotIt) {

				if (this.y < 20 || this.y > 460) {
						this.direction = -this.direction; // Richtung umkehren
						this.hit = false;
				}
				this.y = this.y - this.speed * this.direction;
		
			} else {
				this.x = -50;
		}
}, 1000 / 60);
	
	}

	/**
		* fill the path variable with the correct color
		*/
	loadImgPath() {
		this.colorPath = `img/2.Enemy/2 Jelly fish/Regular/${this.color} 1.png`;
		super.loadImg(this.colorPath);
	}
}







