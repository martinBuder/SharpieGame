class BubblePoison extends AllBubbles{


	constructor(sharkie, bubbleNr) {
		super().loadImg('../img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble.png');
		this.sharkie = sharkie;
		this.bubbleNr = bubbleNr
		this.getBubble();
	}

	getBubble() {
		setInterval(() => {
		if(this.sharkie.poisonBubble && this.sharkie.bubbleNr == this.bubbleNr) {
				this.sharkie.isPoisonBubbleGenerated = false;

				this.x = this.sharkie.x + 200
				this.y = this.sharkie.y + 80
				this.animateBubble();			
		}}), 1000/60
	}

}