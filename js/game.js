let canvas;
let ctx;
let world = new World();
let sharpie = new Sharpie();
let enemies = new PufferFish();

function init() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	console.log(World);
}
