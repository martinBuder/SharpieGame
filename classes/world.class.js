class World {

	img;
	ctx;

	sharpie = new Sharpie();
	enemies = [
		new PufferFish(),
		new PufferFish(),
		new PufferFish(),
	];	

	constructor(canvas) {
		this.ctx = canvas.getContext('2d');
		this.draw();
	}

	loadImg(path) {
		this.img = new Image();
		this.img.src = path;
	}

	draw() {
		this.ctx.drawImage(this.sharpie.img, this.sharpie.x, this.sharpie.y, this.sharpie.width, this.sharpie.height);
	}
} 