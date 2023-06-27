class RedPufferFish extends PufferFish {

	constructor() {
		super();
		this.color = '3';
		this.loadImgPath();
		this.fillENEMY_SWIM();
		this.loadImages(this.ENEMY_SWIM);
		this.animateSwim();
	}
}