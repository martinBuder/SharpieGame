class CoinsStatus extends Status {

	x = 250;
	imgNr = 0

	constructor(sharkie) {
		super().loadImg(`img/4. Marcadores/Purple/coins/${this.imgNr}.png`);
		this.sharkie = sharkie;
		this.getStatus();
	}

	/**
		* get the right amount and show correct picture
		*/
	getStatus() {
		setInterval(() => {
			this.x = 250 - this.sharkie.world.camera_x
			this.imgNr = Math.round(this.sharkie.coinsAmount / 4);
			if (this.imgNr > 5) {
				this.imgNr = 5

			}
			this.loadImg(`img/4. Marcadores/Purple/coins/${this.imgNr}.png`);
		}, 1000 / 60);
	}

} 