class RedPufferFish extends PufferFish {

	constructor() {
		super();
		this.color = '3';
		this.loadImgPath();
		this.getSwimAnimationPath(5, `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.color}.swim`);
		this.animateSwim();
	}

	// getSwimAnimationPath(path) {
	// 	this.ANIMATIONS.ENEMY_SWIM.push([6, path])
	// }
	
}