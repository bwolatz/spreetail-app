class Note {
    public timestamp: string;
    public text: string;
    
    public constructor(text: string) {
        let date = new Date();
        this.timestamp = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        this.text = text;
    }
}

export { Note };