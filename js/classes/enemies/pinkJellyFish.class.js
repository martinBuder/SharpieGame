class PinkJellyFish extends JellyFish {

	constructor() {
		super();
		this.color = 'Pink';
		this.loadImgPath();
		this.fillENEMY_SWIM();
		this.loadImages(this.ENEMY_SWIM)
		this.animateSwim()
	}
}