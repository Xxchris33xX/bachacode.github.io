export default () => ({
    hasLink(text: string): boolean{
        return text.startsWith("https") ? true : false;
    }
})