class World {
	background = new BackgroundImg();
	sharkie = new Sharkie();
	enemies = [
		new PufferFish(),
		new PufferFish(),
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

		this.ctx.drawImage(this.background.img, this.background.x, this.background.y,  this.background.width, this.background.height);

		this.ctx.drawImage(this.sharkie.img, this.sharkie.x, this.sharkie.y,  this.sharkie.width, this.sharkie.height);
		this.enemies.forEach(enemy => {
			this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);	
		});
		this.coins.forEach(coin => {
			this.ctx.drawImage(coin.img, coin.x, coin.y, coin.width, coin.height);	
		});
		this.floors.forEach(floor => {
			this.ctx.drawImage(floor.img, floor.x, floor.y, floor.width, floor.height);	
		});
		this.ctx.drawImage(this.light.img, this.light.x, this.light.y,  this.light.width, this.light.height);
		let self = this;
		requestAnimationFrame(() => {self.draw();});
		
	}
} 