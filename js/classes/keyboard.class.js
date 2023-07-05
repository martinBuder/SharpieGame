class Keyboard {
	LEFT = false;
	RIGHT = false;
	UP = false;
	DOWN = false;
	SLAP = false;
	BUBBLE = false;
	POISONBUBBLE = false;


constructor(){
	this.bindtouchs();
}


bindtouchs() {

document.getElementById('btnLeft').addEventListener('touchstart', (e) => { e.preventDedault();
	this.LEFT = true;
	});

document.getElementById('btnLeft').addEventListener('touchend', (e) => { e.preventDedault();
	this.LEFT = false;
});

document.getElementById('btnRight').addEventListener('touchstart', (e) => { e.preventDedault();
	this.RIGHT = true;
	});

document.getElementById('btnRight').addEventListener('touchend', (e) => { e.preventDedault();
	this.RIGHT = false;
});

document.getElementById('btnUp1').addEventListener('touchstart', (e) => { e.preventDedault();
	this.UP = true;
	});

document.getElementById('btnUp1').addEventListener('touchend', (e) => { e.preventDedault();
	this.UP = false;
});

document.getElementById('btnUp2').addEventListener('touchstart', (e) => { e.preventDedault();
	this.UP = true;
	});

	
document.getElementById('btnUp2').addEventListener('touchend', (e) => { e.preventDedault();
	this.UP = false;
});

document.getElementById('btnDown1').addEventListener('touchend', (e) => { e.preventDedault();
	this.DOWN = true;
});

	document.getElementById('btnDown1').addEventListener('touchend', (e) => { e.preventDedault();
		this.DOWN = false;
	});

	document.getElementById('btnDown2').addEventListener('touchstart', (e) => { e.preventDedault();
		this.DOWN = true;
		});

	document.getElementById('btnDown2').addEventListener('touchend', (e) => { e.preventDedault();
		this.DOWN = false;
	});


document.getElementById('btnBubble').addEventListener('touchstart', (e) => { e.preventDedault();
	this.BUBBLE = true;
	});

document.getElementById('btnBubble').addEventListener('touchend', (e) => { e.preventDedault();
	this.BUBBLE = false;
});

document.getElementById('btnPoisonbubble').addEventListener('touchstart', (e) => { e.preventDedault();
	this.POISONBUBBLE = true;
	});

document.getElementById('btnPoisonbubble').addEventListener('touchend', (e) => { e.preventDedault();
	this.POISONBUBBLE = false;
});

document.getElementById('btnSlap').addEventListener('touchstart', (e) => { e.preventDedault();
	this.SLAP = true;
	});

document.getElementById('btnSlap').addEventListener('touchend', (e) => { e.preventDedault();
	this.SLAP = false;
});

}
}