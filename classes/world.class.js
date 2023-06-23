class World {
 // x;
	// y;
	// width;
	// height;
	img;
	ctx;

	movableObjject = new MovableObject();

	constructor(canvas) {
		this.ctx = canvas.getContext('2d');
		this.draw();
	}



	draw() {
		this.ctx.drawImage(this.sharkie.img, this.sharkie.x, this.sharkie.y, this.sharkie.width, this.sharkie.height);
	}
} 