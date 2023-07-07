class Enemies extends MovableObject {
	power = 1;
	width = 60;
	height = 60;
	start = 0;

	constructor() {
		super();
		this.y = 50 + Math.random() * 300;
		this.x = this.start + 1000 + Math.random() * 4000;
	}

	/**
		* play enemie swim animation
		*/
	animateSwim() {
		setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.ENEMY_SWIM)
		}, 420);
	}

}
