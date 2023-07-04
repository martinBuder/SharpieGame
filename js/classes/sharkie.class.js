class Sharkie extends MovableObject {	

	x = 50;
	y = 180;
	height = 150;
	width = 220;


	offsetY = 70;
	offsetX = 40;
	offsetHeight = 100;

	bubble = false;
	poisonBubble = false;
	isBubbleGenerated = false;
	isPoisonBubbleGenerated = false

	worldEnd = 5750

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
	lifeAmount = 5;
	coinsAmount = 0;
	poisonsAmount = 0;

	firstBack = false
	sharkieDied = false
	slap = false

	bubbleNr = 0;
	poisonBubbleNr = 0;
	sleepTimer = 0;
	sleepTime = 5;

	swimmingSound = new Audio('../audio/swimming.mp3');
	endgegnerPointSound = new Audio('../audio/danger.mp3');
	dieingSound = new Audio('../audio/loseGame.mp3');
	

	muteSound(){
		this.swimmingSound.muted = !this.swimmingSound.muted
		this.endgegnerPointSound.muted = !this.endgegnerPointSound.muted;
		this.dieingSound.muted = !this.dieingSound.muted
	}

	constructor() {
		super().loadImg('../img/1.Sharkie/1.IDLE/1.png');
		// the number must be one bigger then picture are there
		this.fillANIMATIONS()
		this.getLoadImages()
		this.animate();
		this.getPositionX();
		this.startSleepTimer();
	}

	startSleepTimer() {
  let sleepInterval = setInterval(() => {
    if (this.sleepTimer >= this.sleepTime) {
      clearInterval(sleepInterval); // Vorheriges Intervall stoppen
      let animationInterval = setInterval(() => {
        this.getAnimationsToRun(this.ANIMATIONS.ANIMATION_SLEEP);
        if (this.sleepTimer < this.sleepTime) {
          clearInterval(animationInterval);
        }
      }, 1000 / 5);
    } else {
      this.sleepTimer++;
    }
  }, 1000);
}

getPositionX() {
		return this.x;
	}

	resetSleepTimer() {
		this.sleepTimer = 0;
	}

	animate() {
		setInterval(() => {
		this.swimmingSound.pause();

		if(this.world.keyboard.BUBBLE && !this.isBubbleGenerated) {
			this.resetSleepTimer()	
			this.isBubbleGenerated = true;
			this.bubble = true;
			this.getAnimationsToRun(this.ANIMATIONS.ANIMATION_BUBBLE_ATTACK); 	
			this.bubbleNr++; 
			if(this.bubbleNr == 16) {
				this.bubbleNr = 0;
			}
		} 
		
		if(!this.world.keyboard.BUBBLE) {
			this.bubble = false;
			this.isBubbleGenerated = false; 
		}

		if(this.world.keyboard.POISONBUBBLE && !this.isPoisonBubbleGenerated) {
			this.resetSleepTimer()	
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




		if(this.world.keyboard.SLAP) {
			this.resetSleepTimer()	
			let stopPoint = setInterval(() => {
				this.slap = true;      
				this.getAnimationsToRun(this.ANIMATIONS.ANIMATION_SLAP_ATTACK);
			}, 1000/2 ); 
			setTimeout(() => {
				clearInterval(stopPoint)
			}, 800 );
			this.slap = false
		}			

		if(!this.world.keyboard.SLAP) {
			this.slap = false;
		}



	
		if(this.world.keyboard.RIGHT) {
			this.resetSleepTimer()	

			if(this.x < 5800) {
				this.x += 5;
			}
			this.otherDirection = false;
		}
		if(this.world.keyboard.LEFT) {
			this.resetSleepTimer()	

			if(this.x > 0) {
				this.x -= 5;
			}
			this.otherDirection = true;
		}
		
		// camera goes right
			if (this.x <	this.endgegnerPoint &&
						this.world.camera_x + this.x > 400 && this.x + 480 < 6000) {
				this.world.camera_x = -this.x + 400
			}

			



			if (this.x > this.endgegnerPoint) {
				// !danger music
			this.world.gameSound[0].pause();
			this.endgegnerPointSound.volume = 0.6;
			this.endgegnerPointSound.loop = true; 
			this.endgegnerPointSound.play();
		
				if(this.world.camera_x -480 > -	this.worldEnd) {
				
						this.world.camera_x = -this.x;
					}
			}
		
	//camera goes left
		if (this.x > 20 && this.world.camera_x + this.x < 20) {
			this.world.camera_x = -this.x + 20
		}
	

		if(this.world.keyboard.UP) {
			this.resetSleepTimer()	

			if(this.y > -90) {
				this.y -= 4
				if(this.otherDirection == false) {
					if(this.x < this.worldEnd) { //! das stimmt noch nicht 
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
			this.resetSleepTimer()	

			if(this.y < 315) {
				this.y += 4
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

		let sharkieStand = setInterval(() => {
				if(this.world.keyboard.LEFT == false && this.world.keyboard.RIGHT == false) {
				this.getAnimationsToRun(this.ANIMATIONS.ANIMATION_STAND)
				};
				if(this.lifeAmount <= 0 || this.sleepTimer > this.sleepTime)
					clearInterval(sharkieStand)
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
				this.resetSleepTimer()	

			}, 1000/20);
	}



}

