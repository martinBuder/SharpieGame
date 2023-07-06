let canvas;
let world;
let keyboard = new Keyboard;
let sharkie;


/**
	* definated canvas
	*/
function init() {
	canvas = document.getElementById('canvas');
	definatedTouchBtns();
}

/**
	* start game and set world
	*/
function setLevel() {
	let startWindow = document.getElementById('startBtn');
	let gameOver = document.getElementById('gameOver')
	startWindow.classList.add('displayNone');
	gameOver.classList.remove('show');
	world = new World(canvas, keyboard);
	sharkie = world.sharkie;
	isGameFinish(world);
}

/**
	* control game finish
	* 
	* @param {ClassDecorator} world 
	*/
function isGameFinish(world) {
	let gameStatus = setInterval(() => {
		if(world.gameEnd) {
			clearInterval(gameStatus);
			let endImg = document.getElementById('gameOver');
			endImg.classList.add('show');
		}
	}, 200);
}

/**
	* change the mute Btn from old to new to old and with sound play is the same
	*/
function muteBrowser() {
	let muteButton = document.getElementById('mute');
	muteButton.src = (muteButton.src.endsWith('001-mute.png')) ? 'img/6.Botones/png/002-volume-level.png' : 'img/6.Botones/png/001-mute.png';

 world.muteSound();
	world.sharkie.muteSound();
}

function definatedTouchBtns() {
	document.getElementById('btnLeft').addEventListener('touchstart', (e) => { e.preventDefault();
		keyboard.LEFT = true;
		});
	
	document.getElementById('btnLeft').addEventListener('touchend', (e) => { e.preventDefault();
		keyboard.LEFT = false;
	});
	
	document.getElementById('btnRight').addEventListener('touchstart', (e) => { e.preventDefault();
		keyboard.RIGHT = true;
		});
	
	document.getElementById('btnRight').addEventListener('touchend', (e) => { e.preventDefault();
		keyboard.RIGHT = false;
	});
	
	document.getElementById('btnUp1').addEventListener('touchstart', (e) => { e.preventDefault();
		keyboard.UP = true;
		});
	
	document.getElementById('btnUp1').addEventListener('touchend', (e) => { e.preventDefault();
		keyboard.UP = false;
	});
	
	document.getElementById('btnUp2').addEventListener('touchstart', (e) => { e.preventDefault();
		keyboard.UP = true;
		});
	
		
	document.getElementById('btnUp2').addEventListener('touchend', (e) => { e.preventDefault();
		keyboard.UP = false;
	});
	
	document.getElementById('btnDown1').addEventListener('touchend', (e) => { e.preventDefault();
		keyboard.DOWN = true;
	});
	
		document.getElementById('btnDown1').addEventListener('touchend', (e) => { e.preventDefault();
			keyboard.DOWN = false;
		});
	
		document.getElementById('btnDown2').addEventListener('touchstart', (e) => { e.preventDefault();
			keyboard.DOWN = true;
			});
	
		document.getElementById('btnDown2').addEventListener('touchend', (e) => { e.preventDefault();
			keyboard.DOWN = false;
		});
	
	
	document.getElementById('btnBubble').addEventListener('touchstart', (e) => { e.preventDefault();
		keyboard.BUBBLE = true;
		});
	
	document.getElementById('btnBubble').addEventListener('touchend', (e) => { e.preventDefault();
		keyboard.BUBBLE = false;
	});
	
	document.getElementById('btnPoisonbubble').addEventListener('touchstart', (e) => { e.preventDefault();
		keyboard.POISONBUBBLE = true;
		});
	
	document.getElementById('btnPoisonbubble').addEventListener('touchend', (e) => { e.preventDefault();
		keyboard.POISONBUBBLE = false;
	});
	
	document.getElementById('btnSlap').addEventListener('touchstart', (e) => { e.preventDefault();
		keyboard.SLAP = true;
		});
	
	document.getElementById('btnSlap').addEventListener('touchend', (e) => { e.preventDefault();
		keyboard.SLAP = false;
	});
}

/**
	* definated keydowns 
 */
window.addEventListener('keydown', (e) => {
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


/**
	* definated key up
 */
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




