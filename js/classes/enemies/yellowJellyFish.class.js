class YellowJellyFish extends JellyFish {

	constructor() {
		super();
		this.color = 'Yellow';
		this.loadImgPath();
		this.fillENEMY_SWIM();
		this.loadImages(this.ENEMY_SWIM)
		this.animateSwim()
	}
}