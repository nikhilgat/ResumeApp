import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.loadPosts();
  }
  ngOnInit(): void {}
  
  posts: any[] = [];

 editpost:edit={id:1 ,name:"",phoneNo:"",address:"",email:""}

  loadPosts() {
    this.http.get('http://localhost:8080/get').subscribe((posts: any) => {
      this.posts = posts;
    });
  }
  uploadPost() {
    this.http.put('http://localhost:8080/put', this.editpost).subscribe(
      (res) => {
        alert('Resume Updated Successfuly');
        location.reload;
        console.log(this.editpost);
      },
      (err) => {
        alert('Error has occured when sending Input Check it once ');
        location.reload;
      }
    );
  }
}

export interface edit{
  id:number
  name:string
  phoneNo:string
  address:string
  email:string
}