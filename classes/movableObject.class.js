class MovableObject extends World {
	sharkie = new Sharkie();
	enemies = [
		new PufferFish(),
		new PufferFish(),
		new PufferFish(),
	];	

	constructor() {
		super();
	}

	loadImg(path) {
		this.img = new Image();
		this.img.src = path;
	}

	moveRight() {

	} 

	moveLeft() {
		
	} 

	moveUp() {
		
	} 

	moveDown() {
		
	} 

}