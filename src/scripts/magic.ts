interface magic {
    index: number,
    stars: number,
    interval: number,
    methods: Object,
    sparks(star: Element): void
}

export default (index = 0, stars = 3, interval = 2000): magic => ({
    index, stars, interval,
    methods: {
        rand(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        animate(star: HTMLElement) {
            star.style.setProperty('left', `${this.rand(-10, 100)}%`);
            star.style.setProperty('top', `${this.rand(-40, 80)}%`);

            star.style.animation = "none";
            star.offsetHeight;
            star.style.animation = "";
        },
    },
    sparks(star: Element) {
        setTimeout(() => {
            this.methods.animate(star);
            setInterval(() => this.methods.animate(star), this.interval)
        }, this.index++ * (this.interval / 3))
    }
})