class EndBackground extends MovableObject{

		x = 0;
		y = 0;
		width = 2000;
		height = 500;

	constructor(sharkie) {
		super().loadImg('../img/3. Background/Dark/1.png');
		this.sharkie = sharkie
		this.drawImg()
	}

	drawImg() {
		setInterval(() => {
			this.x = this.sharkie.x -700
			this.loadImg('../img/3. Background/Dark/1.png');
		}, 1000/60);
}
}