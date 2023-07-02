class AllBubbles extends MovableObject{ 

	width = 0;
	height = 0;	

	animateBubble() {
		setTimeout(() => {
			setInterval(() => {
				this.gotIt = false;
				this.width = 50;
				this.height = 50;
				this.x += 0.1;		
				}, 1000/60)
			}, 1000);
	}

}