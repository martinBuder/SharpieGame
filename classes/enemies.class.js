class Enemies extends MovableObject {

	constructor() {
		super();
		this.y = 50 + Math.random() * 300;
		this.x = 300 + Math.random() * 1600;
		this.width = 70;
		this.height = 100;
	}
}