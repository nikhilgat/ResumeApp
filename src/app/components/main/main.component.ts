import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.loadPosts();
  }
  ngOnInit(): void {}
  
  posts: any[] = [];

  loadPosts() {
    this.http.get('http://localhost:8080/get').subscribe((posts: any) => {
      this.posts = posts;
    });
  }

  
}
