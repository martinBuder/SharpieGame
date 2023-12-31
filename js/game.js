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
  for (let i = 0; i < world.coins.length; i++) {
    world.coins[i].gotIt = false;
  }
		for (let i = 0; i < world.poisons.length; i++) {
			world.poisons[i].gotIt = false;
		}
		for (let i = 0; i < world.enemies.length; i++) {
			world.enemies[i].gotIt = false;
			world.enemies[i].hit = false;
			world.enemies[i].endBoosHere = false;
			world.enemies[i].x = 400 + Math.random() * 4000;;
		}
		sharkie = world.sharkie;
		isGameFinish(world);
		setFullscreenOnMaxHeight();
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
			let muteButton = document.getElementById('mute');
			endImg.classList.add('show');
			if(muteButton.src.includes('002-volume-level.png')) {
				world.muteSound();
				world.sharkie.muteSound();
			} else {
				muteButton.src = 'img/6.Botones/png/002-volume-level.png'
			}
		}
	}, 200);
}

/**
	* change the mute Btn from old to new to old and with sound play is the same
	*/
function muteBrowser() {
	if(world !== undefined) {
	let muteButton = document.getElementById('mute');
	muteButton.src = (muteButton.src.endsWith('001-mute.png')) ? 'img/6.Botones/png/002-volume-level.png' : 'img/6.Botones/png/001-mute.png';

 world.muteSound();
	world.sharkie.muteSound();
	}
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
		sharkie.otherDirection = true
		keyboard.UP = true;
		});
	
	document.getElementById('btnUp1').addEventListener('touchend', (e) => { e.preventDefault();
		keyboard.UP = false;
	});
	
	document.getElementById('btnUp2').addEventListener('touchstart', (e) => { e.preventDefault();
		sharkie.otherDirection = false
		keyboard.UP = true;
		});
	
		
	document.getElementById('btnUp2').addEventListener('touchend', (e) => { e.preventDefault();
		keyboard.UP = false;
	});
	
	document.getElementById('btnDown1').addEventListener('touchstart', (e) => { e.preventDefault();
		sharkie.otherDirection = true
		keyboard.DOWN = true;
	});
	
		document.getElementById('btnDown1').addEventListener('touchend', (e) => { e.preventDefault();
			keyboard.DOWN = false;
		});
	
		document.getElementById('btnDown2').addEventListener('touchstart', (e) => { e.preventDefault();
			sharkie.otherDirection = false
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

/**
	* make the fullscreen modus for mobilphone
	*/
	function setFullscreenOnMaxHeight() {
		const maxHeight = 480; 
		const element = document.getElementById("forFullscreen");
	
		if (element) {
				if (element.clientHeight <= maxHeight) {
						// Element ist kleiner oder gleich 480px in der Höhe
						if (element.requestFullscreen) {
								element.requestFullscreen();
								console.log(element.clientHeight);
						} else if (element.mozRequestFullScreen) { // Firefox
								element.mozRequestFullScreen();
						} else if (element.webkitRequestFullscreen) { // Chrome, Safari und Opera
								element.webkitRequestFullscreen();
						} else if (element.msRequestFullscreen) { // Internet Explorer/Edge
								element.msRequestFullscreen();
						}
				}
		}
	}




