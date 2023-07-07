class LifeStatus extends Status {

	x = 20;
	imgNr = 5;

	constructor(sharkie) {
		super().loadImg(`img/4. Marcadores/Purple/life/${this.imgNr}.png`);
		this.sharkie = sharkie;
		this.getStatus();
	}

	/**
		* get the right amount and show correct picture
		*/	
	getStatus() {
		setInterval(() => {
			this.imgNr = this.sharkie.lifeAmount;
			if (this.imgNr < 0) {
				this.imgNr = 0
			}
			this.loadImg(`img/4. Marcadores/Purple/life/${this.imgNr}.png`);
		}, 1000 / 60);
	}

}