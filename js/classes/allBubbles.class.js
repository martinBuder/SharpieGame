class AllBubbles extends MovableObject {
	width = 0;
	height = 0;
	offsetY = 0;
	offsetX = 0;
	offsetHeight = 0;
	begin = true;

	/**
		* play the bubble go forward animation
		* 
		* @param {number} otherWay 0 or 1
		*/
	animateBubble(otherWay, xStart) {
		let stopBubble = setInterval(() => {
			this.gotIt = false;
			this.bubbleBigger()
			if (this.width > 50) {
				this.fixedSize()
			}
			this.goCorrectWay(otherWay, xStart, stopBubble)
		}, 1000 / 30)
	}

	/**
		* size will be bigger
		*/
	bubbleBigger() {
		this.width += 3;
		this.height += 3;
	}

	/**
		* set size
		*/
	fixedSize() {
		this.width = 50;
		this.height = 50;
	}

	/**
		* det the direction of sharkie so bubble goes the same way
		* 
		* @param {number} otherWay 0 or 1
		* @param {number} xStart 
		*/
	goCorrectWay(otherWay, xStart, stopBubble) {
		if (otherWay == 1) {
					this.x -= 20;
			if (this.x < xStart - 450) {
				clearInterval(stopBubble);
				this.y = 20;
				this.x = -100;
				this.begin = true
			}
		} else {
			this.x += 20;
			if (this.x > xStart + 450) {
				clearInterval(stopBubble);
				this.y = 20;
				this.x = -100;
				this.begin = true
			}
		}
	}

}