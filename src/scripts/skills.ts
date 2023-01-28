interface skills{
    categories: Array<boolean>
    toggle(id: number): void 
}

export default (categories): skills => ({
    categories,
    toggle(id: number) {
        for (let index = 0; index < this.categories.length; index++) {
            this.categories[index] = false;
        }
        this.categories[id] = !this.categories[id];
    }
});