class AllBubbles extends MovableObject{ 

	width = 0;
	height = 0;	

	offsetY = 0;
	offsetX = 0;
	offsetHeight = 0;

	animateBubble() {
		setInterval(() => {	
				this.gotIt = false;
				this.width += 0.1;
				this.height += 0.1;
				if(this.width > 50) {
					this.width = 50;
					this.height = 50;
				}
				this.x += 1;		
				}, 1000/30)
	}

}