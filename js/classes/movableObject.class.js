class MovableObject {
	
	xPoint;
	camera_x;
	x;
	y;
	offsetY = 0;
	img;
	height;
	width;
	imageCache = [];
	otherDirection = false;

	endgegnerPoint = 8160;


	loadImg(path) {
		this.img = new Image();
		this.img.src = path;
	}
 
	loadImages(imageArray) {
		imageArray.forEach(path => {
			let img = new Image();
			img.src = path;
			this.imageCache[path] = img;
		});
	}

	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

	}

	drawFrame(ctx){
		
		if(this instanceof Sharkie ||
					this instanceof Enemies ||
					this instanceof EndBoss ||
					this instanceof CollectItems)
		ctx.beginPath();
		ctx.lineWidth = '5';
		ctx.strokeStyle = 'white';
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.stroke();
	}

	// Bessere Formel zur Kollisionsberechnung (Genauer)
		isColliding (obj) {
			return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
											(this.y + this.offsetY + this.height) >= obj.y &&
											(this.y + this.offsetY) <= (obj.y + obj.height) 
										
		
		}



}