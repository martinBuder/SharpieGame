class MovableObject {

	offsetY = 0
	gotIt = false;
	otherDirection = false;
	hit = false
	endgegnerPoint = 4500;

	ANIMATIONS = {};
	imageCache = [];
	imgInArray = 0;

	/**
		* load image
		* 
		* @param {string} path 
		*/
	loadImg(path) {
		this.img = new Image();
		this.img.src = path;
	}

	/**
		* load all images from this Array
		* 
		* @param {Array} imageArray 
		*/
	loadImages(imageArray) {
		imageArray.forEach(path => {
			let img = new Image();
			img.src = path;
			this.imageCache[path] = img;
		});
	}

	/**
		* draw each image
		* 
		* @param {context} ctx 
		*/
	draw(ctx) {
		if (!this.gotIt)
			ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}

	/**
		* draw the borders
		* 
		* @param {context} ctx 
		*/
	drawFrame(ctx) {
		if (this instanceof Enemies ||
			this instanceof EndBoss ||
			this instanceof CollectItems ||
			this instanceof AllBubbles) {
			if (!this.gotIt) {
				this.drawItemsBorder(ctx)
			}
		}
		if (this instanceof Sharkie) {
			this.drawSharkieBorder(ctx)
		}
	}

	/**
		* draw the border of items
		* 
		* @param {context} ctx 
		*/
	drawItemsBorder(ctx){
		ctx.beginPath();
				if (this instanceof EndBoss) {
					ctx.rect(this.x + 20, this.y + 90, this.width - 40, this.height - 130);
				} else {
					ctx.rect(this.x, this.y, this.width, this.height);
				}
	}
	
	/**
		* draw the border of sharkie
		* 
		* @param {context} ctx 
		*/
	drawSharkieBorder(ctx){
		ctx.beginPath();
		ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.width - this.offsetX * 2, this.height - this.offsetHeight);
	}

	/**
		* control collision class with item
		* 
		* @param {class} obj 
		* @returns to check Collision
		*/
	isColliding(obj) {
		if (obj instanceof EndBoss) {
			return (this.x + this.offsetX + this.width - this.offsetX * 2) >= (obj.x + 20) &&
				(this.x + this.offsetX) <= (obj.x + obj.width - 40) &&
				(this.y + this.offsetY + this.height - this.offsetHeight) >= (obj.y + 90) &&
				(this.y + this.offsetY) <= (obj.y + obj.height -50);
		} else {
			return (this.x + this.offsetX + this.width - this.offsetX * 2) >= obj.x &&
				(this.x + this.offsetX) <= (obj.x + obj.width) &&
				(this.y + this.offsetY + this.height - this.offsetHeight) >= obj.y &&
				(this.y + this.offsetY) <= (obj.y + obj.height);
		}
	}

	/**
		* loadImages for full Animations Json
		*/
	getLoadImages() {
		for (let key in this.ANIMATIONS) {
			let animate = this.ANIMATIONS[key];
			animate.splice(0, 2);
			this.loadImages(animate);
		}
	}

	/**
		* fill the Animations with the pictures
		*/
	fillANIMATIONS() {
		for (let key in this.ANIMATIONS) {
			let animate = this.ANIMATIONS[key];
			for (let i = 1; i < animate[0]; i++) {
				animate.push(`${animate[1]}${i}.png`);
			}
		};
	}

	/**
		* get all pictures to run
		* 
		* @param {Array} imageArray 
		*/
	getAnimationsToRun(imageArray) {
		let i = this.imgInArray % imageArray.length;
		let path = imageArray[i];
		this.img = this.imageCache[path];
		this.imgInArray++;
	}

}