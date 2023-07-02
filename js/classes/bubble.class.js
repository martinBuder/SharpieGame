class Bubble extends AllBubbles{

	constructor(sharkie, bubbleNr) {
		super().loadImg('../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
		this.sharkie = sharkie;
		this.bubbleNr = bubbleNr
		this.getBubble();
	}

	getBubble() {
		setInterval(() => {
		if(this.sharkie.bubble && this.sharkie.bubbleNr == this.bubbleNr) {
			this.x = this.sharkie.x
			this.y = this.sharkie.y
			this.animateBubble();
		}}), 1000/60
	}



}