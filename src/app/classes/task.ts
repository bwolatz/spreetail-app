import { Note } from "./note";
import { Category } from "./category";

// class of Image. holds essential properties, such as source data and filename
class Task {
    public notes: Note[] = new Array();
    public num: number;
    public complete: boolean;
    public title: string;
    public description: string;
    public estimatedTime: string;
    public category: Category;
    
    public constructor(num: number, title: string, description: string, estimatedTime: string, category: Category) {
        this.notes = [];
        this.complete = false;
        this.num = num;
        this.title = title;
        this.description = description;
        this.estimatedTime = estimatedTime;
        this.category = category;
    }
}
export { Task };