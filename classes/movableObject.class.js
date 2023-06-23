class MovableObject {
	
	x = 20;
	y = 180;
	img;
	height = 200;
	width = 260;

	// constructor() {
	// 	super()
	// }

	loadImg(path) {
		this.img = new Image();
		this.img.src = path;
	}

}