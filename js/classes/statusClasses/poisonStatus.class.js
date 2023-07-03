class PoisonStatus extends Status {
	
	x = 480;
	imgNr = 0;

	constructor(sharkie) {
		super().loadImg(`../img/4. Marcadores/Purple/poison/${this.imgNr}.png`);
		this.sharkie = sharkie;
		this.getStatus();
	}

	getStatus() {
		setInterval(() => {
			this.x = 480 - this.sharkie.world.camera_x
			this.imgNr = this.sharkie.poisonsAmount;
			this.loadImg(`../img/4. Marcadores/Purple/poison/${this.imgNr}.png`);
		}, 1000/60);
	}

}