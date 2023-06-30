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
	floors = level1.enemies;
	poisons = level1.poisons;
	light = new Light();

	gameSound = [
		new Audio('../audio/gameMusic.mp3'),
		new Audio('../audio/underWater.mp3')
	]
	
	endboss = new EndBoss(this.sharkie);
	pufferfish = new PufferFish(this.sharkie);

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
							this.sharkie.lifeAmount -= item.power
							// console.log(this.sharkie.lifeAmount, item.power)
							if(this.sharkie.lifeAmount <= 0) {
								// // this.sharkieDied = true
								// this.sharkie.sharkieDie();
							}
						}	
							if (!this.sharkieDied && item instanceof CollectItems && !item.gotIt){

								if (item instanceof Coins){
									// items.firstLetterUpercase()
									this.sharkie.coinsAmount += item.power
									console.log(this.sharkie.coinsAmount, item.power);
									item.gotIt = true;
								}
								if (item instanceof Poison){
									this.sharkie.poisonsAmount += item.power
									console.log(this.sharkie.poisonsAmount, item.power);
									item.gotIt = true;
								}
							}
						
				}	
		});	
					}, 1000);
				
	}

	whereIsSharkie() {
		   // Den Charakter überwachen und die Endboss-Aktivierung auslösen
					setInterval(() => {
						const characterPosition = this.sharkie.x;
						if (characterPosition >= 8600) {
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
		this.addObjectsToMap(this.floors);

		// Helligkeit für das Licht
		this.ctx.globalAlpha = this.light.brightness; // Erhöhe den globalen Transparenzwert, um das Lichtbild heller zu machen
		this.addToMap(this.light);
		// Setze die globale Transparenz zurück
 	this.ctx.globalAlpha = 1; // Setze die Transparenz zurück auf 100%

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
