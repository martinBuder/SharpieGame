class PufferFish extends Enemies {
	endBossHere;

	constructor(sharkie) {
		super();
		this.sharkie = sharkie;
		this.animateMove();
		this.endBossHere = false;
	};

	/**
		* play pufferfish move animation
		*/
	animateMove() {
		this.speed = 2 + Math.random() * 1.3;
		setInterval(() => {
			if (!this.gotIt) {
				if (!this.endBossHere) {
					if (this.x < -100)
						this.pufferfishGetNewStart()
				}
				this.x = this.x - this.speed
			} else {
				this.x = -50;
			}
		}, 1000 / 60);
	}

	/**
		* set pufferfish back to end of map
		*/
	pufferfishGetNewStart() {
		this.x = 6000;
		this.y = 0 + Math.random() * 410;
		this.hit = false;
	}

	/**
		* set the endBoosHere value
		* 
		* @param {boolean} value 
		*/
	setEndBossHere(value) {
		this.endBossHere = value;
	}

	/**
		* set the value for setEndBossHere()
		*/
	changeEndBossHere() {
		this.setEndBossHere(true);
	}

	/**
		* 
		* @returns the boolean to every pufferfish for animationMove()
		*/
	getEndBossHere() {
		return this.endBossHere;
	}

	/**
		* fill the path with the correct color
		*/
	loadImgPath() {
		this.colorPath = `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.color}.swim1.png`;
		super.loadImg(this.colorPath);
	}

}




