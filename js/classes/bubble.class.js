class Bubble extends AllBubbles{

	width = 0;
	height = 0;
	bubbles = [];

	// bubbles = [
	// 	'../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'
	// ]
	

	constructor(sharkie) {
		super().loadImg('../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
		this.sharkie = sharkie;
		this.animateBubble();
	}

	animateBubble() {
		setInterval(() => {
		if(this.sharkie.bubble) {
			this.x = this.sharkie.x
			this.y = this.sharkie.y
			setInterval(() => {
			this.gotIt = false;
			this.width = 50;
			this.height = 50;
			this.x += 20;
		
			}, 1000)
}}), 1000/60
	}

}