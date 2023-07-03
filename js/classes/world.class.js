class World {
	// level = level1
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

	gameSound = [
		new Audio('../audio/gameMusic.mp3'),
		new Audio('../audio/underWater.mp3')
	]
	
	endboss = new EndBoss(this.sharkie);
	pufferfish = new PufferFish(this.sharkie);
 allBubbles = new AllBubbles;

	bubbles = [new Bubble(this.sharkie, 1), 
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

	poisonBubbles = [new BubblePoison(this.sharkie, 1), 
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
	}


	checkCollision(items) {
		setInterval(() => {
			items.forEach((item) => {
				if(this.sharkie.isColliding(item)) {
						if (!this.sharkieDied && !(item instanceof CollectItems)){
								if(item instanceof GreenJellyFish || item instanceof PinkJellyFish) {
									let stop = setInterval(() => {
										this.sharkie.getAnimationsToRun(this.sharkie.ANIMATIONS.ANIMATION_ELECTRIC_HURT)
									}, 1000/60);
									setTimeout(() => {
										clearInterval(stop)
									}, 300);
								}else{
									if(!this.sharkie.slap && item instanceof PufferFish) {
									let stop = setInterval(() => {
										this.sharkie.getAnimationsToRun(this.sharkie.ANIMATIONS.ANIMATION_NORMAL_HURT)
									}, 1000/60);
									setTimeout(() => {
										clearInterval(stop)
									}, 300);
									item.gotIt = true;
								}
							}	
							
							this.sharkie.lifeAmount -= item.power
							// console.log(this.sharkie.lifeAmount, item.power)
							if(this.sharkie.lifeAmount <= 0) {
								
								// this.sharkieDied = true
								// this.sharkie.sharkieDie();
							}
						}	
						if (!this.sharkieDied && item instanceof CollectItems && !item.gotIt){
								if (item instanceof Coins){
									item.gotIt = true;
									this.sharkie.coinsAmount++
								}
								if (item instanceof Poison){
									if(this.sharkie.poisonsAmount < 5) {
										item.gotIt = true;
										this.sharkie.poisonsAmount++
									}
								}
						}
						
				}	
				this.bubbles.forEach((bubble) => {
					if (bubble.isColliding(item)) {
						console.log('trewfferf');
						item.gotIt = true;
						
						// ...
						// Behandlung der Kollision zwischen Bubble und dem Item
					}
				});
	
				// Überprüfe Kollision mit PoisonBubbles
				this.poisonBubbles.forEach((poisonBubble) => {
					if (poisonBubble.isColliding(item)) {
						// ...
						// Behandlung der Kollision zwischen PoisonBubble und dem Item
					}
				});
		});	
					}, 1000);
				
	}

	whereIsSharkie() {
		   // Den Charakter überwachen und die Endboss-Aktivierung auslösen
					setInterval(() => {
						const characterPosition = this.sharkie.x;
						if (characterPosition >= 4950) {
								this.endboss.animateEndboss();
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

	initAudio() {
  document.addEventListener('click', () => {
			this.gameSound[0].currentTime = 0;
			this.gameSound[0].volume = 0.1;
			this.gameSound[0].loop = true; 
	  this.gameSound[0].play();
  });

		document.addEventListener('click', () => {
			this.gameSound[1].currentTime = 0;
			this.gameSound[1].volume = 0.2;
			this.gameSound[1].loop = true; 
			this.gameSound[1].play();
		});
	}

	setWorld() {
		this.sharkie.world = this;
	}

	draw() {
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.ctx.translate(this.camera_x, 0);

		this.addObjectsToMap(this.background);
		this.addObjectsToMap(this.coins);
		this.addObjectsToMap(this.poisons);
		this.addToMap(this.sharkie);
		this.addToMap(this.endboss);
		this.addObjectsToMap(this.enemies);
		this.addObjectsToMap(this.bubbles);
		this.addObjectsToMap(this.poisonBubbles);
		this.addObjectsToMap(this.floors);


		// Helligkeit für das Licht
		this.ctx.globalAlpha = this.light.brightness; // Erhöhe den globalen Transparenzwert, um das Lichtbild heller zu machen
		this.addToMap(this.light);
		// Setze die globale Transparenz zurück
 	this.ctx.globalAlpha = 1; // Setze die Transparenz zurück auf 100%

		this.addObjectsToMap(this.status);

		this.ctx.translate(-this.camera_x, 0);

		let self = this;
		requestAnimationFrame(() => {
			self.draw();
		});
	};

	addObjectsToMap(objectsArray) {
		objectsArray.forEach(object => {
			this.addToMap(object)
		})
	};

	addToMap(objectImage) {
		if(objectImage.otherDirection) 
			this.flipImage(objectImage);
		objectImage.draw(this.ctx);
		objectImage.drawFrame(this.ctx);
		if(objectImage.otherDirection) 
			this.flipImageBack(objectImage)
	}

	flipImage(objectImage) {
		this.ctx.save();
		this.ctx.translate(objectImage.width, 0);
		this.ctx.scale(-1, 1);
		objectImage.x = objectImage.x * -1
	}

	flipImageBack(objectImage) {
		objectImage.x = objectImage.x * -1;
			this.ctx.restore();
	}

}
