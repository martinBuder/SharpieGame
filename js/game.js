let canvas;
let world;
let keyboard = new Keyboard;
let sharkie;



function init() {
	canvas = document.getElementById('canvas');
	world = new World(canvas, keyboard);
	sharkie = world.sharkie;
}

function muteBrowser() {
	let muteButton = document.getElementById('mute');
	muteButton.src = (muteButton.src.endsWith('001-mute.png')) ? 'img/6.Botones/png/002-volume-level.png' : 'img/6.Botones/png/001-mute.png';

 world.muteSound()
}



window.addEventListener('keydown', (e) => {
	console.log(e);
	if(e.keyCode == 39) {
		keyboard.RIGHT = true;
	}
	if(e.keyCode == 37) {
		keyboard.LEFT = true;
	}
	if(e.keyCode == 38) {
		keyboard.UP = true;
	}
	if(e.keyCode == 40) {
		keyboard.DOWN = true;
	}
	if(e.keyCode == 32) {
		keyboard.SLAP = true;
	}
	if(e.keyCode == 70) {
		keyboard.BUBBLE = true;
	}
	if(e.keyCode == 68) {
		keyboard.POISONBUBBLE = true;
	}
});

window.addEventListener('keyup', (e) => {
	if(e.keyCode == 39) {
		keyboard.RIGHT = false;
	}
	if(e.keyCode == 37) {
		keyboard.LEFT = false;
	}
	if(e.keyCode == 38) {
		keyboard.UP = false;
	}
	if(e.keyCode == 40) {
		keyboard.DOWN = false;
	}
	if(e.keyCode == 32) {
		keyboard.SLAP = false;
	}
	if(e.keyCode == 70) {
		keyboard.BUBBLE = false;
	}
	if(e.keyCode == 68) {
		keyboard.POISONBUBBLE = false;
	}
});
