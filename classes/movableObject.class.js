class MovableObject {
	
	x;
	y;
	img;
	height;
	width;
	imageCache = [];

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