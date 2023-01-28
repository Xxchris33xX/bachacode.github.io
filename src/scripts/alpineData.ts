export const minifiedContent = Alpine.data('minifiedContent', () => ({
    maxLength: 240,
    minContent: '',
    lenght: 0,
    isCollapsed: true,
    setMinifyContent(text: string) {
        this.lenght = text.length;
        this.minContent = text.slice(0, this.maxLength);
    },
    toggleShow() {
        this.isCollapsed = !this.isCollapsed;
    }
}))

export const scroll = Alpine.data('scroll', () => ({
    init() {
        this.scrollFunction();
    },
    scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            this.$refs.navbar.classList.add("scrolled-navbar");
        } else {
            this.$refs.navbar.classList.remove("scrolled-navbar");
        }

    }
}))
export const modal = Alpine.data('modal', () => ({
    open: false,
    toggle() {
        this.open = !this.open
    },
    close() {
        this.open = false
    }
}))
export const selectedSection = Alpine.data('selectedSection', () => ({
    init(){
        this.updateList()
    },
    updateList() {
        const titles = [...document.querySelectorAll('h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
        });
        let id = [...document.querySelectorAll('h2')].indexOf(titles[0]);
        document.querySelectorAll(".selected-option").forEach(c => c.classList.remove("selected-option"));
        document.querySelectorAll(".nav-option")[id].classList.add("selected-option");
    }
}))