function updateList() {
	const titles = [...document.querySelectorAll('h1')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});
	document.querySelectorAll(".selected-option").forEach(c => c.classList.remove("selected-option"));
	document.querySelectorAll(".nav-option")[[...document.querySelectorAll('h1')].indexOf(titles[0])].classList.add("selected-option");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})


function methods(){
	return {
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
