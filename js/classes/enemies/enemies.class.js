class Enemies extends MovableObject {
	power = 2;

	ANIMATIONS = {
		ENEMY_SWIM: []
	}

	constructor() {
		super();
		this.y = 50 + Math.random() * 300;
		this.x = 300 + Math.random() * 11000;
		this.width = 70;
		this.height = 100;
	}

	animateSwim() {
		setInterval(() => {
			this.getAnimationsToRun(this.ANIMATIONS.ENEMY_SWIM)
			}, 420);
	}

}
