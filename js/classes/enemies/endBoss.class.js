
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
		ENDBOSS_DEAD: [9, 'img/2.Enemy/3 Final Enemy/Dead/'],
	}
	firstContact = false;

	/**
		* 
		* @param {class} sharkie 
		*/
	constructor(sharkie) {
		super().loadImg(`../img/2.Enemy/3 Final Enemy/1.Introduce/1.png`);
		this.sharkie = sharkie;
		this.fillANIMATIONS();
		this.getLoadImages();
		this.attackEndboos();
		this.endboosDie();
	}

	/**
		* play hurt animation
		*/
	animateHurt() {
		let stop = setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_HURT)
		}, 1000/60);
		setTimeout(() => {
			clearInterval(stop)
		}, 400);
	}

	/**
		* animated endboss coming when sharkie is the first time there
		*/
		animateEndboss() {
			if (!this.firstContact) {
					let stopComeAnimation = setInterval(() => {
							this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_COMES);
					}, 1000/10);
					setTimeout(() => {
							clearInterval(stopComeAnimation);
								setInterval(() => {
									this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_STAY);
							}, 420);
					}, 1000);
					this.firstContact = true;
			}
	}
	
	/**
		* endboss get to attack
		*/
	attackEndboos(){
		setInterval(() => {
			if(this.firstContact && this.lifePower > 0) {
				setTimeout(() => {
					let whaleAttack = setInterval(() => {
						this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_ATTACK);
						this.x -= 60
						setTimeout(() => {
							clearInterval(whaleAttack);
							this.x += 60
						}, 1000);
					}, 420);
				}, 3000 + Math.random() * 2000);
			}
		}, 5000);
	}

	/**
		* endbossDie
		*/
	endboosDie(){
		setInterval(() => {
			if(this.lifePower <= 0) {
					let whaleDead = setInterval(() => {
						this.getAnimationsToRun(this.ANIMATIONS.ENDBOSS_DEAD);
						this.x -= 60
						setTimeout(() => {
							clearInterval(whaleDead);
							this.loadImg(`../img/2.Enemy/3 Final Enemy/Dead/9.png`)
							this.y -= 0.1
						}, 1000);
					}, 420);
			}
		}, 1000/60);
	}
	
	

	}

	/**
		* animated endboss coming when sharkie is the first time there
		*/
		
