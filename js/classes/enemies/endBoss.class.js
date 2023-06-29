
class EndBoss extends MovableObject {

	x = 9400;
	y = 0;
	height = 350;
	width = 500;

	ENDBOSS_COMES = [];
	ENDBOSS_STAY = [];
	imgInSwim = 0;
	firstContact = false;



	// sharkieX = super().sharkie.x

	constructor(sharkie) {
		super().loadImg(`../img/2.Enemy/3 Final Enemy/1.Introduce/1.png`);
		this.fillENDBOSS_STAY();
		this.fillENDBOSS_COMES();
		this.loadImages(this.ENDBOSS_COMES);
		this.loadImages(this.ENDBOSS_STAY);
		this.sharkie = sharkie;
	}

	fillENDBOSS_COMES() {
  for (let i = 1; i < 11; i++) {
    this.ENDBOSS_COMES.push(`../img/2.Enemy/3 Final Enemy/1.Introduce/${i}.png`);
  }
	}

	fillENDBOSS_STAY() {
  for (let i = 1; i < 14; i++) {
    this.ENDBOSS_STAY.push(`../img/2.Enemy/3 Final Enemy/2.floating/${i}.png`);
  }
	}

	animateEndboss() {
		if (!this.firstContact) {

			let stopComeAnimation = setInterval(() => {
			let i = this.imgInSwim;
			let path = this.ENDBOSS_COMES[i];
			this.img = this.imageCache[path];
			this.imgInSwim++;
			if(this.imgInSwim == 10) {
				clearInterval(stopComeAnimation);
			}
		}, 1000/10);

	

			setTimeout(() => {
				setInterval(() => {
				let i = this.imgInSwim % this.ENDBOSS_STAY.length;
				let path = this.ENDBOSS_STAY[i];
				this.img = this.imageCache[path];
				this.imgInSwim++;
					}, 420);
				}, 4200);
				this.firstContact = true
	
}
}
}