class AllBubbles extends MovableObject{ 

	width = 0;
	height = 0;	

	offsetY = 0;
	offsetX = 0;
	offsetHeight = 0;

	animateBubble(otherWay) {
		setInterval(() => {	
				this.gotIt = false;
				this.width += 1;
				this.height += 1;
				if(this.width > 50) {
					this.width = 50;
					this.height = 50;
				}
				
				if(otherWay == 1) {
					this.x -= 1;		
				}else {
					this.x += 1;		
				}
			
				}, 1000/30)
	}

}