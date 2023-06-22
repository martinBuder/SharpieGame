class World {
	x; 
	y; 
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
	}

	loadImg(path) {
		this.img = new Image();
		this.img.src = path;
	}

	ctx = canvas.getContext('2d')
} 