class Sharkie extends MovableObject {	

	x = 8000;
	y = 180;
	height = 200;
	width = 260;

	// ANIMATION_STAND = []
	// 	ANIMATION_SWIM = [];
	// 	ANIMATION_NORMAL_DIE = [];
	// 	ANIMATION_ELECTRIC_DIE = [];

	// ! Animations
	ANIMATIONS = {
		ANIMATION_STAND: [],
		ANIMATION_SWIM: [],
		ANIMATION_NORMAL_DIE: [],
		ANIMATION_ELECTRIC_DIE: [],
	}

	world;
	lifeAmount = 10;
	coinsAmount = 0;
	poisonsAmount = 0;

	firstBack = false
	sharkieDied = false

	swimmingSound = new Audio('../audio/swimming.mp3');
	endgegnerPointSound = new Audio('../audio/danger.mp3')

	constructor() {
		super().loadImg('../img/1.Sharkie/1.IDLE/1.png');
		// the number must be one bigger then picture are there
		this.fillANIMATION(this.ANIMATIONS.ANIMATION_STAND, 19, 'img/1.Sharkie/1.IDLE/');
		this.fillANIMATION(this.ANIMATIONS.ANIMATION_SWIM, 7, 'img/1.Sharkie/3.Swim/');
		this.fillANIMATION(this.ANIMATIONS.ANIMATION_NORMAL_DIE, 13, 'img/1.Sharkie/6.dead/1.Poisoned/');
		this.fillANIMATION(this.ANIMATIONS.ANIMATION_ELECTRIC_DIE, 11, 'img/1.Sharkie/6.dead/2.Electro_shock/');
		this.getLoadImages()
		this.animate();
		this.getPositionX();
	}

	getPositionX() {
		return this.x;
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
		
			if (this.x <	this.endgegnerPoint &&
						this.world.camera_x + this.x > 950) {
				this.world.camera_x = -this.x +950
			}



			if (this.x > this.endgegnerPoint) {
				// !danger music
			this.world.gameSound[0].pause();
			this.endgegnerPointSound.volume = 0.6;
			this.endgegnerPointSound.loop = true; 
			this.endgegnerPointSound.play();
			
			// 	if (!this.firstBack) {
			// 		this.firstBack = true;
			// 		let counter = 0;
			// 		let stopCameraBack = setInterval(() => {
			// 		this.world.camera_x = this.world.camera_x -50;
			// 		counter = counter + 50;
			// 		if(counter == 950) {
			// 			clearInterval(stopCameraBack);
			// 		}
			// 	}, 1000);
			// }

				if(this.world.camera_x > -8350) {
				
						this.world.camera_x = -this.x;
					}
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
				this.getAnimationsToRun(this.ANIMATIONS.ANIMATION_SWIM)
				this.swimmingSound.play();
				this.swimmingSound.volume = 0.2;
			}
		}, 1000/60)
				
		let sharkieSwim = setInterval(() => {
				if(this.world.keyboard.LEFT == false && this.world.keyboard.RIGHT == false) {
				this.getAnimationsToRun(this.ANIMATIONS.ANIMATION_STAND)
			};
			if(this.lifeAmount <= 0)
				clearInterval(sharkieSwim)
		}, 1000);
	}

	sharkieDie() {
		let i = 0;
			setInterval(() => {
				this.getAnimationsToRun(this.ANIMATIONS.ANIMATION_NORMAL_DIE)
				// this.swimmingSound.play();
				// this.swimmingSound.volume = 0.2;
				if(i >= 11) {
				path = this.ANIMATIONS.ANIMATION_NORMAL_DIE[11];
    this.img = this.imageCache[path];
				}
			}, 1000/20);
	}



}

