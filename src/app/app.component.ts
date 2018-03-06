import { Component, ElementRef, ViewChild } from '@angular/core';
import { Note } from './classes/note';
import { Category } from './classes/category';
import { Task } from './classes/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Spreetail To-Do List';
    
    // component level variables
    nextTaskId: number = 1;
    tasks: Task[] = new Array();
    
    nextCategoryId: number = 1;
    categories: Category[] = new Array();
    
    error: string = "";
    
    filterCategory: number = 0;
    
    noteText: string = "";
    
    editTaskId: number = 0;
    editTask: Task;
    
    addingCategory: boolean = false;
    addingTask: boolean = false;
    
    newTitle: string = "";
    newDescription: string = "";
    newEstimatedTime: string = "";
    newCategory: Category = null;
    newComplete: boolean = false;
    
    newCategoryText: string = "";
    
    tasksCompleted: number = 0;
    
    bringToEdit(selectedId) {
        this.closeAddTask();
        this.error = "";
        for (var j = 0; j < this.tasks.length; j++) {
            if (this.tasks[j].num == selectedId) {
                if (this.tasks[j].complete) {
                    this.error = "Cannot edit a completed task.";                    
                } else {
                    this.editTask = this.tasks[j];
                    this.editTaskId = selectedId;
                }
                break;
            }
        }
    }
    
    closeEdit() {
        if (this.newComplete) {
            this.tasksCompleted++;
            this.editTask.complete = true;
        }
        this.newComplete = false;
        this.editTaskId = 0;
        this.error = "";
        this.noteText = "";
    }
    
    addNote() {
        console.log(this.filterCategory);
        if (this.noteText.length <= 0) {
            this.error = "No note to add.";
        } else {
            let newNote = new Note(this.noteText)
            this.editTask.notes.push(newNote);
            this.noteText = "";
        }
    }
    
    startAddTask() {
        this.newComplete = false;
        this.closeEdit();
        this.addingTask = true;
        this.newTitle = "";
        this.newDescription = "";
        this.newEstimatedTime = "";
        this.newCategory = null;
    }
    
    addTask() {
        if (this.newTitle.length <= 0) {
            this.error = "No title for task.";
        } else if (this.newDescription.length <= 0) {
            this.error = "No task description.";
        } else {
            let newTask = new Task(this.nextTaskId, this.newTitle, this.newDescription, this.newEstimatedTime, this.newCategory);
            this.nextTaskId++;
            this.tasks.push(newTask);
            this.closeAddTask()
        }
    }
    
    closeAddTask() {
        this.error = "";
        this.addingTask = false;
        this.newTitle = "";
        this.newDescription = "";
        this.newEstimatedTime = "";
    }
    
    startAddCategory() {
        this.error = "";
        this.addingCategory = true;
        this.newCategoryText = "";
    }
    
    addCategory() {
        if (this.newCategoryText.length <= 0) {
            this.error = "No Category Text entered.";
        } else {
            let category = new Category(this.nextCategoryId, this.newCategoryText);
            this.nextCategoryId++;
            this.categories.push(category);
            this.closeAddCategory();
        }
    }
    
    closeAddCategory() {
        this.error = "";
        this.addingCategory = false;
        this.newCategoryText = "";
    }
}











