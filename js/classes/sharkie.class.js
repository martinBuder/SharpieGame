class Sharkie extends MovableObject {	

	x = 8000;
	y = 180;
	height = 200;
	width = 260;

	bubble = false;
	poisonBubble = false;
	isBubbleGenerated = false;
	isPoisonBubbleGenerated = false;

	// ! Animations
	ANIMATIONS = {
		ANIMATION_STAND: [19, 'img/1.Sharkie/1.IDLE/'],
		ANIMATION_SWIM: [7, 'img/1.Sharkie/3.Swim/'],
		ANIMATION_NORMAL_DIE: [13, 'img/1.Sharkie/6.dead/1.Poisoned/'],
		ANIMATION_ELECTRIC_DIE: [11, 'img/1.Sharkie/6.dead/2.Electro_shock/'],
		ANIMATION_SLEEP: [14, 'img/1.Sharkie/2.Long_IDLE/I'],
		ANIMATION_NORMAL_HURT: [4, 'img/1.Sharkie/5.Hurt/1.Poisoned/'],
		ANIMATION_ELECTRIC_HURT: [3, 'img/1.Sharkie/5.Hurt/2.Electric shock/'],
		ANIMATION_SLAP_ATTACK: [8, 'img/1.Sharkie/4.Attack/Fin slap/'],
		ANIMATION_BUBBLE_ATTACK: [8, 'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/'],
		ANIMATION_POISON_BUBBLE_ATTACK: [8, 'img/1.Sharkie/4.Attack/Bubble trap/For Whale/'],
	}

	world;
	lifeAmount = 10;
	coinsAmount = 0;
	poisonsAmount = 0;

	firstBack = false
	sharkieDied = false

	bubbleNr = 0;
	poisonBubbleNr = 0;

	swimmingSound = new Audio('../audio/swimming.mp3');
	endgegnerPointSound = new Audio('../audio/danger.mp3')

	constructor() {
		super().loadImg('../img/1.Sharkie/1.IDLE/1.png');
		// the number must be one bigger then picture are there
		this.fillANIMATIONS()
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

		if(this.world.keyboard.BUBBLE && !this.isBubbleGenerated) {	
			this.isBubbleGenerated = true;
			this.bubble = true;
			this.getAnimationsToRun(this.ANIMATIONS.ANIMATION_BUBBLE_ATTACK); 	
			this.bubbleNr++; 
			if(this.bubbleNr == 16) {
				this.bubbleNr = 0;
			}
		}

		if(this.world.keyboard.SLAP) {
				this.getAnimationsToRun(this.ANIMATIONS.ANIMATION_SLAP_ATTACK); 
		}

			

		if(!this.world.keyboard.BUBBLE) {
			this.bubble = false;
			this.isPoisonBubbleGenerated = false; 
		}

		if(this.world.keyboard.POISONBUBBLE && !this.isPoisonBubbleGenerated) {
			this.isPoisonBubbleGenerated = true;
			this.poisonBubble = true;
			this.getAnimationsToRun(this.ANIMATIONS.ANIMATION_POISON_BUBBLE_ATTACK); 
			this.poisonBubbleNr++; 
			if(this.poisonBubbleNr == 16) {
				this.poisonBubbleNr = 0;
			}

		}

		if(!this.world.keyboard.POISONBUBBLE) {
			this.poisonBubble = false;
			this.isPoisonBubbleGenerated = false; 
		}

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
		}, 1000/5);
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

