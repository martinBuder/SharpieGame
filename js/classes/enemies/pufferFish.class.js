class PufferFish extends Enemies {
	endBossHere;

	constructor(sharkie) {
		super();
		this.sharkie = sharkie;
		this.animateMove();
		this.endBossHere = false;
	};

	animateMove() {
	this.speed = 2 + Math.random() * 2;
		setInterval(() => {
			if(!this.endBossHere) {
			if (this.x < -100) {
				this.x = 10000;
				this.y = 0 + Math.random() * 410;
			}
		}
			this.x = this.x - this.speed 
		}, 1000 / 60); 
	}

	setEndBossHere(value) {
		this.endBossHere = value;
}

changeEndBossHere() {
		this.setEndBossHere(true);
}

getEndBossHere() {
	return this.endBossHere;
}

	loadImgPath() {
		this.colorPath = `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.color}.swim1.png`;
		super.loadImg(this.colorPath);
	}

}




