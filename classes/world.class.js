class World {

	keyboard;
	canvas;
	ctx;
	camera_x = 0;

	background = [
		new BackgroundImg('../img/3. Background/Layers/5. Water/D.png', 0),
		new BackgroundImg('../img/3. Background/Layers/5. Water/D.png', 2000),
		new BackgroundImg('../img/3. Background/Layers/5. Water/D.png', 4000),
		new BackgroundImg('../img/3. Background/Layers/5. Water/D.png', 6000),
		new BackgroundImg('../img/3. Background/Layers/5. Water/D.png', 8000),

		new BackgroundImg('../img/3. Background/Layers/4.Fondo 2/D.png', 0),
		new BackgroundImg('../img/3. Background/Layers/4.Fondo 2/D.png', 2000),
		new BackgroundImg('../img/3. Background/Layers/4.Fondo 2/D.png', 4000),
		new BackgroundImg('../img/3. Background/Layers/4.Fondo 2/D.png', 6000),
		new BackgroundImg('../img/3. Background/Layers/4.Fondo 2/D.png', 8000),

		new BackgroundImg('../img/3. Background/Layers/3.Fondo 1/D.png', 0),
		new BackgroundImg('../img/3. Background/Layers/3.Fondo 1/D.png', 2000),
		new BackgroundImg('../img/3. Background/Layers/3.Fondo 1/D.png', 4000),
		new BackgroundImg('../img/3. Background/Layers/3.Fondo 1/D.png', 6000),
		new BackgroundImg('../img/3. Background/Layers/3.Fondo 1/D.png', 8000),

		new BackgroundImg('../img/3. Background/Layers/2. Floor/D.png', 0),
		new BackgroundImg('../img/3. Background/Layers/2. Floor/D.png', 2000),
		new BackgroundImg('../img/3. Background/Layers/2. Floor/D.png', 4000),
		new BackgroundImg('../img/3. Background/Layers/2. Floor/D.png', 6000),
		new BackgroundImg('../img/3. Background/Layers/2. Floor/D.png', 8000),
	]
	sharkie = new Sharkie();
	enemies = [
		new RedPufferFish(),
		new GreenPufferFish(),
		new OrangePufferFish(),
		new GreenPufferFish(),
		new GreenJellyFish(),
		new RedPufferFish(),
		new GreenPufferFish(),
		new OrangePufferFish(),
		new GreenPufferFish(),
		new GreenJellyFish(),
		new LilaJellyFish(),
		new RedPufferFish(),
		new YellowJellyFish(),
		new OrangePufferFish(),
		new PinkJellyFish(),
		new RedPufferFish(),
		new GreenPufferFish(),
		new OrangePufferFish(),
		new GreenPufferFish(),
		new GreenJellyFish(),
		new LilaJellyFish(),
		new RedPufferFish(),
		new YellowJellyFish(),
		new OrangePufferFish(),
		new PinkJellyFish(),
		new LilaJellyFish(),
		new RedPufferFish(),
		new YellowJellyFish(),
		new OrangePufferFish(),
		new PinkJellyFish(),
	]

	coins = [
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
		new Coins(),
	]

	light = new Light();
	floors = [
		new Floor(),
		new Floor(),
		new Floor(),
		new Floor(),
		new Floor(),
	]

	
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
		this.endboss.world = this.sharkie.world;
	}

	draw() {
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.ctx.translate(this.camera_x, 0);

		this.addObjectsToMap(this.background);
		this.addObjectsToMap(this.coins);
		this.addToMap(this.sharkie);
		this.addToMap(this.endboss);
		this.addObjectsToMap(this.enemies);
		this.addObjectsToMap(this.floors)

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
		if(objectImage.otherDirection) {
			this.ctx.save();
			this.ctx.translate(objectImage.width, 0);
			this.ctx.scale(-1, 1);
			objectImage.x = objectImage.x * -1
		}
		this.ctx.drawImage(objectImage.img, objectImage.x, objectImage.y, objectImage.width, objectImage.height);
		if(objectImage.otherDirection) {
			objectImage.x = objectImage.x * -1;
			this.ctx.restore();
		}
};


}
