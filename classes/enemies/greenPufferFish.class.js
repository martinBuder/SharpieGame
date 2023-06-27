class GreenPufferFish extends PufferFish {

	constructor() {
		super();
		this.color = '1';
		this.loadImgPath();
		this.fillENEMY_SWIM();
		this.loadImages(this.ENEMY_SWIM)
		this.animateSwim()
	}
}