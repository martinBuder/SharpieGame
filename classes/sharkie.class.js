class Sharkie extends MovableObject {	

	x = 8000;
	y = 180;
	height = 200;
	width = 260;
	SHARKIE_STAND = [];
	SHARKIE_SWIM = [];
	imgInSwim = 0;
	world;

	swimmingSound = new Audio('../audio/swimming.mp3')

	constructor() {
		super().loadImg('../img/1.Sharkie/1.IDLE/1.png');
		this.fillSHARKIE_STAND();
		this.fillSHARKIE_SWIM();
		this.loadImages(this.SHARKIE_STAND);
		this.loadImages(this.SHARKIE_SWIM);
		this.animate();
	}

	fillSHARKIE_STAND() {
  for (let i = 1; i < 19; i++) {
    this.SHARKIE_STAND.push(`../img/1.Sharkie/1.IDLE/${i}.png`);
  }
	}

	fillSHARKIE_SWIM() {
  for (let i = 1; i < 7; i++) {
    this.SHARKIE_SWIM.push(`../img/1.Sharkie/3.Swim/${i}.png`);
  }
	}

	animate() {
		setInterval(() => {
		this.swimmingSound.pause();
		if(this.world.keyboard.RIGHT) {
			if(this.x < 9760) {
				this.x += 5;
			}
			this.otherDirection = false;
		}
		if(this.world.keyboard.LEFT) {
			if(this.x > 0) {
				this.x -= 5;
			}
			this.otherDirection = true;
		}
		if (this.x < 9340 && this.world.camera_x + this.x > 950) {
			this.world.camera_x = -this.x + 950;
		}
		if (this.x > 350 && this.world.camera_x + this.x < 350) {
			this.world.camera_x = -this.x + 350
		}
	

		if(this.world.keyboard.UP) {
			if(this.y > -90) {
				this.y -= 10
				if(this.otherDirection == false) {
					if(this.x < 9760) {
						this.x += 2;
					}
				}else{
					if(this.x > 0) {
						this.x -= 2;
					}
				}
			}
		}
		if(this.world.keyboard.DOWN) {
			if(this.y < 315) {
				this.y += 10
				if(this.otherDirection == false) {
					if(this.x < 9760) {
						this.x += 2;
					}
				}else{
					if(this.x > 0) {
						this.x -= 2;
					}
				}
			}
		}}, 1000/60);

		setInterval(() => {
			if(this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
				let i = this.imgInSwim % this.SHARKIE_SWIM.length;
				let path = this.SHARKIE_SWIM[i];
				this.img = this.imageCache[path];
				this.imgInSwim++;
				this.swimmingSound.play();
				this.swimmingSound.volume = 0.2;
			}
		}, 1000/60)
				
		setInterval(() => {
				if(this.world.keyboard.LEFT == false && this.world.keyboard.RIGHT == false) {
				let i = this.imgInSwim % this.SHARKIE_STAND.length;
				let path = this.SHARKIE_STAND[i];
				this.img = this.imageCache[path];
				this.imgInSwim++;
			}
		}, 1000);
	}


}

