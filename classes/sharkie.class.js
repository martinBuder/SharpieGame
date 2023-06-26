class Sharkie extends MovableObject {	

	x = 20;
	y = 180;
	height = 200;
	width = 260;
	SHARKIE_SWIM = [];
	imgInSwim = 0;

	constructor() {
		super().loadImg('../img/1.Sharkie/1.IDLE/1.png');
		this.fillSHARKIE_SWIM();
		this.loadImages(this.SHARKIE_SWIM);
		this.animate();
	
	}

	fillSHARKIE_SWIM() {
  for (let i = 1; i < 19; i++) {
    this.SHARKIE_SWIM.push(`../img/1.Sharkie/1.IDLE/${i}.png`);
  }
	}

	animate() {
		setInterval(() => {
		let i = this.imgInSwim % this.SHARKIE_SWIM.length;
		let path = this.SHARKIE_SWIM[i];
		this.img = this.imageCache[path];
		this.imgInSwim++;
			}, 150);
	}
}

