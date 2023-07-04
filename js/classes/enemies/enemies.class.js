class Enemies extends MovableObject {
	power = 1;
	width = 60;
	height = 60;

	constructor() {
		super();
		this.y = 50 + Math.random() * 300;
		this.x = 1000 + Math.random() * 11000;

	}

	animateSwim() {
		setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.ENEMY_SWIM)
			}, 420);
}

}
