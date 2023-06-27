class World {
	background = new BackgroundImg();
	sharkie = new Sharkie();
	enemies = [
		new RedPufferFish(),
		new RedPufferFish(),
		new OrangePufferFish(),
		new OrangePufferFish(),
		new GreenPufferFish(),
		new GreenPufferFish(),
		new JellyFish(),
		new JellyFish(),
		new JellyFish(),
		new JellyFish(),
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

	canvas;
	ctx;

	constructor(canvas) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.draw();
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
