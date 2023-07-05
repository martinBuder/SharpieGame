class BackgroundImg extends MovableObject {

	constructor(path, x) {
		super().loadImg(path);
		this.y = 0;
		this.x = x
		this.width = 2000;
		this.height = 480;
	}
	
}