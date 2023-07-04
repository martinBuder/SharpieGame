
class EndBoss extends MovableObject {

	x = 5500;
	y = 100;
	height = 250;
	width = 380;

	lifePower = 12;


	ANIMATIONS = {
		ENDBOSS_COMES: [11, 'img/2.Enemy/3 Final Enemy/1.Introduce/'],
		ENDBOSS_STAY: [13, 'img/2.Enemy/3 Final Enemy/2.floating/'],
		ENDBOSS_ATTACK: [6, 'img/2.Enemy/3 Final Enemy/Attack/'],
		ENDBOSS_HURT: [4, 'img/2.Enemy/3 Final Enemy/Hurt/'],
		ENDBOSS_ATTACK: [9, 'img/2.Enemy/3 Final Enemy/Dead/'],
	}
	firstContact = false;

/**
	* 
	* @param {class} sharkie 
	*/
	constructor(sharkie) {
		super().loadImg(`../img/2.Enemy/3 Final Enemy/1.Introduce/1.png`);
		this.sharkie = sharkie;
		this.fillANIMATIONS()
		this.getLoadImages()
	}

	animateHurt() {
		let stop = setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_HURT)
		}, 1000/60);
		setTimeout(() => {
			clearInterval(stop)
		}, 400);
	}
	
	animateEndboss() {
		if (!this.firstContact) {
			let stopComeAnimation = setInterval(() => {
				this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_COMES)
		}, 1000/10);
		setTimeout(() => clearInterval(stopComeAnimation), 1000);
		setTimeout(() => {
				setInterval(() => {
					this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_STAY)
					}, 420);
				}, 1000);
				this.firstContact = true
	
}
}
}