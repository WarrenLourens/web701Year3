import { Component, OnInit } from '@angular/core';
 
@Component({
    selector: 'app-product',
    templateUrl: './product.html',
    styleUrls: [
        './product.css'
    ]
})
 
export class ProductComponent implements OnInit {
    task: string="";
    tasks = new Array();
 
    ngOnInit(): void {
        
      }

  onClick(){
    console.log(this.task);
    this.tasks.push({name: this.task});
    this.task = '';
    console.log(this.tasks);
  }
  onDelete(index: number){
    console.log(this.task);
    this.tasks.splice(index,1);
    this.task = '';
    console.log(this.tasks);
  }
}