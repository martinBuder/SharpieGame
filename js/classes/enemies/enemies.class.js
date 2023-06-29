class Enemies extends MovableObject {

	ENEMY_SWIM = [];
	imgInSwim = 0;

	constructor() {
		super();
		this.y = 50 + Math.random() * 300;
		this.x = 300 + Math.random() * 11000;
		this.width = 70;
		this.height = 100;
	}
	
		animateSwim() {
			setInterval(() => {
			let i = this.imgInSwim % this.ENEMY_SWIM.length;
			let path = this.ENEMY_SWIM[i];
			this.img = this.imageCache[path];
			this.imgInSwim++;
				}, 420);
		}
}
