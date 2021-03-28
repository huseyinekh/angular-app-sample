import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  user={
    name:"Huseyn",
    surname:"Khidirov",
    img:'https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG',
    isEditable:true,
    job:"developer",
    color:'orange'
  }
  changeColor(){
    alert("color")
  }
  ngOnInit(): void {
  }
  clickButton(){
    alert('clicked btn')
  }
  submitForm(e){
    alert(e.target.value)
  }

}
