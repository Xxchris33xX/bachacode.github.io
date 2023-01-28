interface minifiedContent{
    maxLength: number,
    minContent: string,
    length: number,
    isCollapsed: true,
    setMinifyContent(param: string): void,
    toggleShow(): void
}

export default (minContent: string): minifiedContent => ({
    maxLength: 240,
    minContent,
    length: 0,
    isCollapsed: true,
    setMinifyContent(text: string) {
        this.length = text.length;
        this.minContent = text.slice(0, this.maxLength);
    },
    toggleShow() {
        this.isCollapsed = !this.isCollapsed;
    }
})