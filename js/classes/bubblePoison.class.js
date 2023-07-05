class BubblePoison extends AllBubbles {

	damagePower = 4;

	constructor(sharkie, bubbleNr) {
		super().loadImg('../img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble.png');
		this.sharkie = sharkie;
		this.bubbleNr = bubbleNr
		this.getBubble();
	}

	/**
	* get the right bubble with the correct place and direction
	*/
	getBubble() {
		setInterval(() => {
			if (this.sharkie.poisonBubble && this.sharkie.bubbleNr == this.bubbleNr) {
				this.y = this.sharkie.y + 75
				let otherWay = 0
				if (this.sharkie.otherDirection == true) {
					this.x = this.sharkie.x + 20;
					otherWay = 1
				} else {
					this.x = this.sharkie.x + 200
					otherWay = 0;
				}
				xStart = this.x
				this.animateBubble(otherWay, xStart);
			}
		}), 1000 / 60
	}

}