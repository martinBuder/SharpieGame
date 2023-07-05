class AllBubbles extends MovableObject {

	width = 0;
	height = 0;
	offsetY = 0;
	offsetX = 0;
	offsetHeight = 0;

	/**
		* play the bubble go forward animation
		* 
		* @param {number} otherWay 0 or 1
		*/
	animateBubble(otherWay) {
		setInterval(() => {
			this.gotIt = false;
			this.bubbleBigger()
			if (this.width > 50) {
				this.fixedSize()
			}
			this.goCorrectWay(otherWay)
		}, 1000 / 30)
	}

	/**
		* size will be bigger
	 */
	bubbleBigger(){
		this.width += 1;
		this.height += 1;
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
		*/
	goCorrectWay(otherWay) {
		if (otherWay == 1) {
			this.x -= 1;
		} else {
			this.x += 1;
		}
	}

}