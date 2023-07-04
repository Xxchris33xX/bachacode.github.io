document.addEventListener("alpine:init", () => {
  Alpine.data("hasLink", () => ({
    hasLink(text) {
      return text.startsWith("https") ? true : false;
    },
  }));
  Alpine.data("magic", (index = 0, stars = 3, interval = 2000) => ({
    index,
    stars,
    interval,
    methods: {
      rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      animate(star) {
        star.style.setProperty("left", `${this.rand(-10, 100)}%`);
        star.style.setProperty("top", `${this.rand(-40, 80)}%`);

        star.style.animation = "none";
        star.offsetHeight;
        star.style.animation = "";
      },
    },
    sparks(star) {
      setTimeout(() => {
        this.methods.animate(star);
        setInterval(() => this.methods.animate(star), this.interval);
      }, this.index++ * (this.interval / 3));
    },
  }));
  Alpine.data("minifiedContent", (minContent) => ({
    maxLength: 240,
    minContent,
    length: 0,
    isCollapsed: true,
    setMinifyContent(text) {
      this.length = text.length;
      this.minContent = text.slice(0, this.maxLength);
    },
    toggleShow() {
      this.isCollapsed = !this.isCollapsed;
    },
  }));
  Alpine.data("skills", (categories) => ({
    categories,
    toggle(id) {
      for (let index = 0; index < this.categories.length; index++) {
        this.categories[index] = false;
      }
      this.categories[id] = !this.categories[id];
    },
  }));
  Alpine.data("scroll", () => ({
    init() {
      this.scrollFunction();
    },
    scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        this.$refs.navbar.classList.add("scrolled-navbar");
      } else {
        this.$refs.navbar.classList.remove("scrolled-navbar");
      }
    },
  }));
  Alpine.data("modal", () => ({
    open: false,
    toggle() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    },
  }));
  Alpine.data("selectedSection", () => ({
    init() {
      this.updateList();
    },
    updateList() {
      const titles = [...document.querySelectorAll("h2")].sort((a, b) => {
        return (
          Math.abs(a.getBoundingClientRect().top) -
          Math.abs(b.getBoundingClientRect().top)
        );
      });
      let id = [...document.querySelectorAll("h2")].indexOf(titles[0]);
      document
        .querySelectorAll(".selected-option")
        .forEach((c) => c.classList.remove("selected-option"));
      document
        .querySelectorAll(".nav-option")
        [id].classList.add("selected-option");
    },
  }));
});
