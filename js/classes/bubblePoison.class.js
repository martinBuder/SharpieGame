class BubblePoison extends AllBubbles{


	constructor() {
		super().loadImg('../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
	
	}

 animateBubble() {
		if(this.key) {
			this.gotIt = false;
		}
	}

}