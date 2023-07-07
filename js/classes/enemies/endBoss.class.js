
class EndBoss extends MovableObject {

	x = 5500;
	y = 0;
	height = 250;
	width = 380;

	lifePower = 20;
	power = 2;


	ANIMATIONS = {
		ENDBOSS_COMES: [11, 'img/2.Enemy/3 Final Enemy/1.Introduce/'],
		ENDBOSS_STAY: [13, 'img/2.Enemy/3 Final Enemy/2.floating/'],
		ENDBOSS_ATTACK: [6, 'img/2.Enemy/3 Final Enemy/Attack/'],
		ENDBOSS_HURT: [4, 'img/2.Enemy/3 Final Enemy/Hurt/'],
		ENDBOSS_DEAD: [9, 'img/2.Enemy/3 Final Enemy/Dead/'],
	}
	firstContact = false;

	/**
		* 
		* @param {class} sharkie 
		*/
	constructor(sharkie) {
		super().loadImg(`img/2.Enemy/3 Final Enemy/1.Introduce/1.png`);
		this.sharkie = sharkie;
		this.fillAnimations();
		this.getLoadImages();
		this.attackEndboos();
	}

	/**
		* play hurt animation
		*/
	animateHurt() {
		let stop = setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_HURT)
		}, 1000 / 60);
		setTimeout(() => {
			clearInterval(stop)
		}, 400);
	}

	/**
		* animated endboss coming when sharkie is the first time there
		*/
	animateEndboss() {
		if (!this.firstContact && this.lifePower > 0) {
			this.y = 100;
			let stopComeAnimation = setInterval(() => {
				this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_COMES);
			}, 1000 / 10);
			setTimeout(() => {
				clearInterval(stopComeAnimation);
				setInterval(() => {
					if (this.lifePower > 0)
						this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_STAY);
					this.y = 70 + Math.random() * 70;
				}, 420);
			}, 1000);
			this.firstContact = true;
		}
	}

	/**
		* endboss get to attack
		*/
	attackEndboos() {
		// if (this.firstContact && this.lifePower > 0) {
		setInterval(() => {
			if (this.firstContact && this.lifePower > 0) {
				setTimeout(() => {
					let whaleAttack = setInterval(() => {
						this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_ATTACK);
						this.x -= 60
						setTimeout(() => {
							clearInterval(whaleAttack);
							this.x += 60
						}, 1000);
					}, 420);
				}, 2000 + Math.random() * 2000);
			}
		}, 5000);
		// }
	}

	/**
		* endbossDie
		*/
	endboosDie() {
		let whaleDead = setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_DEAD);
			setTimeout(() => {
				clearInterval(whaleDead);
				this.loadImg(`img/2.Enemy/3 Final Enemy/Dead/9.png`)
				let finish = setInterval(() => {
					this.y -= 0.3
					if (this.y < -100)
						clearInterval(finish)
				}, 1000 / 60);
			}, 3000);
		}, 420);
		setTimeout(() => {
			let winning = document.getElementById('winning');
			winning.classList.add('show')
			setTimeout(() => {
				winning.classList.remove('show');
				this.sharkie.world.gameEnd = true;
			}, 3000);
		}, 1000);
	}
}



