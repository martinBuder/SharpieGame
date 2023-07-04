class MovableObject {

	ANIMATIONS = {};

	offsetY = 0
	gotIt = false;

	imageCache = [];
	imgInArray = 0;

	otherDirection = false;
	hit = false

	endgegnerPoint = 4500;



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
		if (!this.gotIt)
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		
	}

	drawFrame(ctx){
			if(this instanceof Enemies ||
					this instanceof EndBoss ||
					this instanceof CollectItems ||
					this instanceof AllBubbles) {
					if (!this.gotIt) {			
						ctx.beginPath();
						ctx.lineWidth = '5';
						ctx.strokeStyle = 'white';
						if(this instanceof EndBoss) {
							ctx.rect(this.x +20 , this.y +90, this.width -40, this.height -130);
						}else{
						ctx.rect(this.x , this.y, this.width, this.height);
						}
						ctx.stroke();
					}
				}
			
				
					if(this instanceof Sharkie) {
						ctx.beginPath();
						ctx.lineWidth = '5';
						ctx.strokeStyle = 'yellow';
						ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.width -this.offsetX*2, this.height - this.offsetHeight);
						ctx.stroke();
					}
	}

	

	// Bessere Formel zur Kollisionsberechnung (Genauer)
		isColliding (obj) {
			if(obj instanceof EndBoss) {
				return (this.x + this.offsetX + this.width - this.offsetX * 2) >= (obj.x + 20) &&
				(this.x + this.offsetX) <= (obj.x + obj.width - 40) &&
				(this.y + this.offsetY + this.height - this.offsetHeight) >= (obj.y + 90) &&
				(this.y + this.offsetY) <= (obj.y + obj.height - 130);
			}
			 else {
			return (this.x + this.offsetX + this.width - this.offsetX * 2) >= obj.x &&
			(this.x + this.offsetX) <= (obj.x + obj.width) &&
			(this.y + this.offsetY + this.height - this.offsetHeight) >= obj.y &&
			(this.y + this.offsetY) <= (obj.y + obj.height);
			}
		}

		getLoadImages() {
			for (let key in this.ANIMATIONS) {
											let animate = this.ANIMATIONS[key];
											animate.splice(0, 2);
											this.loadImages(animate);
			}
	}

		fillANIMATIONS() {
			for (let key in this.ANIMATIONS) {
				let animate = this.ANIMATIONS[key];
				for (let i = 1; i < animate[0]; i++) {
					animate.push(`../${animate[1]}${i}.png`);
				}
			};
		
		}

		getAnimationsToRun(imageArray){
			let i = this.imgInArray % imageArray.length;
			let path = imageArray[i];
			this.img = this.imageCache[path];
			this.imgInArray++;
		}

}