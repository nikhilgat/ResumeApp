import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.loadPosts();
  }
  ngOnInit(): void {}
  
  posts: any[] = [];

  loadPosts() {
    this.http.get('http://localhost:2013/get').subscribe((posts: any) => {
      this.posts = posts;
    });
  }
}
