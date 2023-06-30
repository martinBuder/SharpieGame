class PinkJellyFish extends JellyFish {

	constructor() {
		super();
		this.color = 'Pink';
		this.loadImgPath();
		this.getSwimAnimationPath()
		this.animateSwim()
	}

	getSwimAnimationPath() {
		this.ANIMATIONS.ENEMY_SWIM.push(this.swimAnimationPath)
	}
}