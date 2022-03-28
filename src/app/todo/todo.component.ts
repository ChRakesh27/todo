import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList : string [] = [] ;
  inputvalue : string = "";

  removetodo(name:string){
    this.todoList = this.todoList.filter(x => x !== name);
  }
  addtodo(){
    if(this.inputvalue != "" && this.inputvalue != " "){
      this.todoList.push(this.inputvalue);
      this.inputvalue = "";
    }else{
      alert("enter valid Todo");
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.todoList = ["todu1", "todo2"];
  }

}
