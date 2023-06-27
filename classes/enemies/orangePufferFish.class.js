class OrangePufferFish extends PufferFish {

	constructor() {
		super();
		this.color = '2';
		this.loadImgPath();
		this.fillENEMY_SWIM();
		this.loadImages(this.ENEMY_SWIM)
		this.animateSwim()
	}
}