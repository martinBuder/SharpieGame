class GreenJellyFish extends JellyFish {


	constructor() {
		super();
		this.color = 'Green';
		this.loadImgPath();
		this.fillENEMY_SWIM();
		this.loadImages(this.ENEMY_SWIM)
		this.animateSwim()
	}
}