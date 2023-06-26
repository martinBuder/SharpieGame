class MovableObject {
	
	x;
	y;
	img;
	height;
	width;

	// constructor() {
	// 	super()
	// }

	loadImg(path) {
		this.img = new Image();
		this.img.src = path;
	}

}