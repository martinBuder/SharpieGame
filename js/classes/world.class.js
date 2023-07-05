class World {
	keyboard;
	canvas;
	ctx;
	camera_x = 0;

	background = level1.backgrounds;
	sharkie = new Sharkie();
	enemies = level1.enemies;
	coins = level1.coins;
	floors = level1.floors;
	poisons = level1.poisons;
	light = new Light();

	gameEnd = false;

	endboss = [
		new EndBoss(this.sharkie)
	]
	pufferfish = new PufferFish(this.sharkie);
	allBubbles = new AllBubbles;

	bubbles = [
		new Bubble(this.sharkie, 1),
		new Bubble(this.sharkie, 2),
		new Bubble(this.sharkie, 3),
		new Bubble(this.sharkie, 4),
		new Bubble(this.sharkie, 5),
		new Bubble(this.sharkie, 6),
		new Bubble(this.sharkie, 7),
		new Bubble(this.sharkie, 8),
		new Bubble(this.sharkie, 9),
		new Bubble(this.sharkie, 10),
		new Bubble(this.sharkie, 11),
		new Bubble(this.sharkie, 12),
		new Bubble(this.sharkie, 13),
		new Bubble(this.sharkie, 14),
		new Bubble(this.sharkie, 15),
	];

	poisonBubbles = [
		new BubblePoison(this.sharkie, 1),
		new BubblePoison(this.sharkie, 2),
		new BubblePoison(this.sharkie, 3),
		new BubblePoison(this.sharkie, 4),
		new BubblePoison(this.sharkie, 5),
		new BubblePoison(this.sharkie, 6),
		new BubblePoison(this.sharkie, 7),
		new BubblePoison(this.sharkie, 8),
		new BubblePoison(this.sharkie, 9),
		new BubblePoison(this.sharkie, 10),
		new BubblePoison(this.sharkie, 11),
		new BubblePoison(this.sharkie, 12),
		new BubblePoison(this.sharkie, 13),
		new BubblePoison(this.sharkie, 14),
		new BubblePoison(this.sharkie, 15),
	];

	status = [
		new LifeStatus(this.sharkie),
		new CoinsStatus(this.sharkie),
		new PoisonStatus(this.sharkie),
	]

	gameSound = [
		new Audio('../audio/gameMusic.mp3'),
		new Audio('../audio/underWater.mp3')
	]
	hurtSound = new Audio('../audio/damage.mp3');

gameFinish = [
	new EndBackground(this.sharkie),
]

	constructor(canvas, keyboard) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.draw();
		this.setWorld();
		this.initAudio();
		this.whereIsSharkie();
		this.checkCollision(this.enemies);
		this.checkCollision(this.coins);
		this.checkCollision(this.poisons);
		this.checkCollision(this.endboss);
	}

	/**
		* check collisions
		* 
		* @param {Array} items 
		*/
	checkCollision(items) {
		setInterval(() => {
			items.forEach((item) => {
				this.checkSharkieCollisionWith(item);
				this.checkBubbleCollisionWith(item);
				this.checkPoisonBubbleCollisionWith(item);
			});
		}, 50);

	}

	/**
		* check bubble collision with item
		* 
		* @param {class} item 
		*/
	checkBubbleCollisionWith(item) {
		this.bubbles.forEach((bubble) => {
			this.eachBubbleCheck(item, bubble)
		});
	}

	/**
* check bubble collision with item
* 
* @param {class} item 
*/
	checkPoisonBubbleCollisionWith(item) {
		this.poisonBubbles.forEach((bubble) => {
			this.eachBubbleCheck(item, bubble)
		});
	}

	/**
		* check each bubble for collision
		* 
		* @param {class} item 
		* @param {object} bubble 
		*/
	eachBubbleCheck(item, bubble) {
		if (bubble.isColliding(item)) {
			if (item instanceof Enemies) {
				item.gotIt = true;
			} else
				if (item instanceof EndBoss) {
					if (bubble.hit == false) {
						item.lifePower -= bubble.damagePower;
						bubble.hit = true;
						item.animateHurt();
						if (item.lifePower <= 0) {
							item.endboosDie()
						}
					}
				}
		}
	}

	/**
		* check sharkie collision with item
		* 
		* @param {class} item 
		*/
	checkSharkieCollisionWith(item) {
		if (this.sharkie.isColliding(item)) {
			if(this.sharkie.slap && item instanceof PufferFish) {
				item.hit = true
						setInterval(() => {
					item.getAnimationsToRun(item.ANIMATIONS.ENEMY_DIE)
					item.y -= 0.3;
				  if(!this.sharkie.otherDirection)
							item.x += 1.1
						else
							item.x -= 0.1
				}, 1000/60);
				setTimeout(() => {
					item.gotIt = true
				}, 2000);
			}
			if (!this.sharkieDied && !(item instanceof CollectItems) && !item.hit)
				this.collisionWithEnemy(item)
			if (!this.sharkieDied && item instanceof CollectItems && !item.gotIt)
				this.collisionWithCollectItem(item)
		}
	}

	/**
		* handle collision with collectItems
		* 
		* @param {class} item 
		*/
	collisionWithCollectItem(item) {
		if (item instanceof Coins) {
			this.sharkie.coinsAmount++
			item.gotIt = true;
		}
		if (item instanceof Poison)
			this.checkPoisonAmount(item)
	}

	/**
		* check Amount of poison
		* 
		* @param {class} item 
		*/
	checkPoisonAmount(item) {
		if (this.sharkie.poisonsAmount < 5) {
			item.gotIt = true;
			this.sharkie.poisonsAmount++
		}
	}

	/**
		* show electric hurt
		*/
	collisionWithElectricfish() {
		let stop = setInterval(() => {
			this.sharkie.getAnimationsToRun(this.sharkie.ANIMATIONS.ANIMATION_ELECTRIC_HURT)
		}, 1000 / 60);
		setTimeout(() => {
			clearInterval(stop)
		}, 300);
	}

	/**
		* show non electric hurt
		* 
		* @param {class} item 
		*/
	collisionWithNoneElectricfish(item) {
		// if(this.sharkie.slap && item instanceof PufferFish) {
		// 	item.hit = true
		// 			setInterval(() => {
		// 		item.getAnimationsToRun(item.ANIMATIONS.ENEMY_DIE)
		// 		item.y -= 0.3;
		// 		// if(this.sharkie)
		// 	}, 1000/60);
		// 	setTimeout(() => {
		// 		item.hit = true
		// 	}, 2000);
			
		// } else {
			let stop = setInterval(() => {
				this.sharkie.getAnimationsToRun(this.sharkie.ANIMATIONS.ANIMATION_NORMAL_HURT)
			}, 1000 / 60);
			setTimeout(() => {
				clearInterval(stop)
			}, 300);
		}
	

	/**
		* handle collision with enemy
		* 
		* @param {class} item 
		*/
	collisionWithEnemy(item) {
		if (item instanceof GreenJellyFish || item instanceof PinkJellyFish)
			this.collisionWithElectricfish();
		else
			this.collisionWithNoneElectricfish(item);
		if (item.hit == false) {
				this.hitSharkie(item)
				this.hurtAudio();
			}
		if (this.sharkie.lifeAmount <= 0) {
			this.loseGame()
		}
	}

	/**
		* sharkie is death
		*/
	loseGame() {
		this.loseAudio()
		this.sharkieDied = true
		this.sharkie.sharkieDie();
	}

	/**
		* play dieing sound
		*/
	loseAudio() {
		this.sharkie.loseSound.play();
		this.sharkie.loseSound.volume = 0.3
	}

	/**
		* play hurt audio
		*/
	hurtAudio() {
		this.hurtSound.play();
		this.hurtSound.volume = 0.3;
	}

	/**
		* hit sharkie
		* 
		* @param {class} item 
		*/
	hitSharkie(item) {
		this.sharkie.lifeAmount -= item.power;
		item.hit = true;
		if(item instanceof EndBoss) {
			setTimeout(() => {
				item.hit = false;
			}, 1000);
		}
	}

	/**
		* looks where is sharkie to start the endboos animation
		*/
	whereIsSharkie() {
		setInterval(() => {
			if (this.sharkie.x >= 4950) {
				this.endboss[0].animateEndboss();
				// get the color pufferfishes in enemies to change the x point
				for (let i = 0; i < this.enemies.length; i++) {
					const enemy = this.enemies[i];
					if (enemy instanceof PufferFish) {
						enemy.changeEndBossHere();
					}
				}
			}
		}, 100);
	}

	/**
		* start the game Audio
		*/
	initAudio() {
		this.gameSound[0].currentTime = 0;
		this.gameSound[0].volume = 0.1;
		this.gameSound[0].loop = true;
		this.gameSound[0].play();
		this.gameSound[1].currentTime = 0;
		this.gameSound[1].volume = 0.2;
		this.gameSound[1].loop = true;
		this.gameSound[1].play();
	}

	/**
		* mute or unmute the sounds
		*/
	muteSound() {
		this.gameSound[0].muted = !this.gameSound[0].muted;
		this.gameSound[1].muted = !this.gameSound[1].muted;
		this.hurtSound.muted = !this.hurtSound.muted;
	}

	/**
		* definated sharkies world 
		*/
	setWorld() {
		this.sharkie.world = this;
	}

	/**
		* draw on canvas
		*/
	draw() {
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.ctx.translate(this.camera_x, 0);
		if(!this.gameEnd) {
			this.addObjectsToMap(this.background);
			this.addObjectsToMap(this.coins);
			this.addObjectsToMap(this.poisons);
			this.addToMap(this.sharkie);
			this.addObjectsToMap(this.endboss);
			this.addObjectsToMap(this.enemies);
			this.addObjectsToMap(this.bubbles);
			this.addObjectsToMap(this.poisonBubbles);
			this.addObjectsToMap(this.floors);
			// get the world brightness and change it for the light
			this.ctx.globalAlpha = this.light.brightness;
			this.addToMap(this.light);
			// change the world brightness back 
			this.ctx.globalAlpha = 1;
			this.addObjectsToMap(this.status);
		} else {
			this.addObjectsToMap(this.gameFinish);
		}
			this.ctx.translate(-this.camera_x, 0);
			// reset draw so this is just one img of each item on canvas
			let self = this;
			requestAnimationFrame(() => {
				self.draw();
			});
	
	};

	/**
		* get the array and get each child of this to addToMap()
		*
		* @param {Array} objectsArray 
		*/
	addObjectsToMap(objectsArray) {
		objectsArray.forEach(object => {
			this.addToMap(object)
		})
	};

	/**
		* draw picture on canvas
		* 
		* @param {ClassDecorator} objectImage 
		*/
	addToMap(objectImage) {
		if (objectImage.otherDirection)
			this.flipImage(objectImage);
		objectImage.draw(this.ctx);
		objectImage.drawFrame(this.ctx);
		if (objectImage.otherDirection)
			this.flipImageBack(objectImage)
	}

	/**
		* change the direction of the class
		* 
		* @param {ClassDecorator} objectImage 
		*/
	flipImage(objectImage) {
		this.ctx.save();
		this.ctx.translate(objectImage.width, 0);
		this.ctx.scale(-1, 1);
		objectImage.x = objectImage.x * -1
	}

	/**
		* change direction back
		* 
		* @param {ClassDecorator} objectImage 
		*/
	flipImageBack(objectImage) {
		objectImage.x = objectImage.x * -1;
		this.ctx.restore();
	}
}
