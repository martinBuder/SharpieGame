class Light extends MovableObject {

	opacity

	constructor() {
		super().loadImg('../img/3. Background/Layers/1. Light/COMPLETO.png');
		this.y = 0;
		this.x = 0;
		this.width = 2000;
		this.height = 480;

		this.opacity = 0.5 + Math.random() * 0.1; // Setze die Transparenz entsprechend der opacity-Eigenschaft der Light-Klasse


	}
}