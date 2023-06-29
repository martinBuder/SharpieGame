class MovableObject {
	
	xPoint;
	camera_x;
	x;
	y;
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

}