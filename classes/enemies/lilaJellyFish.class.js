class LilaJellyFish extends JellyFish {


	constructor() {
		super();
		this.color = 'Lila';
		this.loadImgPath();
		this.fillENEMY_SWIM();
		this.loadImages(this.ENEMY_SWIM);
		this.animateSwim();
	}


}