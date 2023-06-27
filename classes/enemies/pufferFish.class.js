class PufferFish extends Enemies {

	constructor() {
		super();
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

	loadImgPath() {
		this.colorPath = `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.color}.swim1.png`;
		super.loadImg(this.colorPath);
	}

	fillENEMY_SWIM() {
		for (let i = 1; i < 6; i++) {
				this.ENEMY_SWIM.push(`img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.color}.swim${i}.png`);
		}
	}
}




