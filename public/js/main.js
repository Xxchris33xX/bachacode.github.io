function updateList() {
	const titles = [...document.querySelectorAll('h1')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});
	document.querySelectorAll(".selected-option").forEach(c => c.classList.remove("selected-option"));
	document.querySelectorAll(".nav-option")[[...document.querySelectorAll('h1')].indexOf(titles[0])].classList.add("selected-option");
}

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("navbar").classList.add("scrolled-navbar");
	} else {
		document.getElementById("navbar").classList.remove("scrolled-navbar");
	}
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
	scrollFunction();
})


function methods(){
	return {
		menuNav(){
			 this.open = false
		},
		openMenu(){
			this.open = true
			document.body.classList.add("scrolling");
		},
		closeMenu(){
			this.open = false
			document.body.classList.remove("scrolling");
		},
		getSkills(){
			this.frontend = true,
			this.backend = false,
			this.database = false,
			this.design = false,
			this.tools = false
		},
		toggleFrontend(){
			this.frontend = true,
			this.backend = false,
			this.database = false,
			this.design = false,
			this.tools = false
			
		},
		toggleBackend(){  
			this.backend = true,
			this.frontend = false,
			this.database = false,
			this.design = false,
			this.tools = false
		},
		toggleDatabase(){  
			this.database = true,
			this.backend = false,
			this.frontend = false,
			this.design = false,
			this.tools = false
		},
		toggleDesign(){  
			this.design = true,
			this.backend = false,
			this.database = false,
			this.frontend = false,
			this.tools = false
		},
		toggleTools(){  
			this.tools = true,
			this.backend = false,
			this.database = false,
			this.design = false,
			this.frontend = false
		},
	}
}
