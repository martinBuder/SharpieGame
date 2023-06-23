class World {
	background = new BackgroundImg();
	sharkie = new Sharkie();
	enemies = [
		new PufferFish(),
		new PufferFish(),
		new JellyFish(),
		new JellyFish(),
	]


	canvas;
	ctx;

	constructor(canvas) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.draw();
	}

	draw() {
		this.ctx.clearRect(0, 0, canvas.width, canvas.height)
		this.ctx.drawImage(this.background.img, this.background.x, this.background.y,  this.background.width, this.background.height);
		this.ctx.drawImage(this.sharkie.img, this.sharkie.x, this.sharkie.y,  this.sharkie.width, this.sharkie.height);
		this.enemies.forEach(enemy => {
			this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);	
		});
		let self = this;
		requestAnimationFrame(() => {self.draw();});
	}
} 