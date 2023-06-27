class World {
	background = new BackgroundImg();
	sharkie = new Sharkie();
	enemies = [
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
	]

	light = new Light();
	floors = [
		new Floor(),
		new Floor(),
	]

	keyboard;
	canvas;
	ctx;

	constructor(canvas, keyboard) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.draw();
		this.setWorld();
	}

	setWorld() {
		this.sharkie.world = this
	}

	draw() {
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.addToMap(this.background);
		this.addObjectsToMap(this.coins);
		this.addToMap(this.sharkie);
		this.addObjectsToMap(this.enemies);
		this.addObjectsToMap(this.floors)

		// Helligkeit für das Licht
		this.ctx.globalAlpha = this.light.brightness; // Erhöhe den globalen Transparenzwert, um das Lichtbild heller zu machen
		this.addToMap(this.light);
		// Setze die globale Transparenz zurück
 	this.ctx.globalAlpha = 1; // Setze die Transparenz zurück auf 100%

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
		this.ctx.drawImage(objectImage.img, objectImage.x, objectImage.y, objectImage.width, objectImage.height);
	};
}
