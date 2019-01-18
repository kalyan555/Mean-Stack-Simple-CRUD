import { Component } from '@angular/core';
import { DataService } from './data.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  id: any;
  constructor(private readonly data:DataService){}
  username="";
  password="";
  result=[];
  insertData(){
    console.log(this.username);
    console.log(this.password);
    this.data.addUser(this.username,this.password);
    this.username="";
    this.password="";
    this.users();    
  }

  updateData(){
    console.log(this.username);
    console.log(this.password);
    this.data.updateUser(this.id,this.username,this.password);
    this.username="";
    this.id=undefined;
    this.password="";
    this.users();    
  }

  ngOnInit(){
   this.users();
  }

  users(){
    this.data.getUsers().subscribe((res:any)=>{
      console.log(res);
      this.result=res;
    })
  }

  delete(id){
    this.data.deleteUser(id).subscribe((res:any)=>{
      console.log(res);
      this.users();      
    })
  }
  update(id,username,password){
    this.username=username;
    this.password=password;
    this.id=id;
  }
}
